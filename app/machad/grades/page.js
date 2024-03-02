"use client";
import React, { useState, useEffect } from "react";
import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_KEY,
}).base("app1FbbXGwZh0ekxG");

const Grades = () => {
  const [studentCode, setStudentCode] = useState("");
  const [studentRecords, setStudentRecords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStudentData = async (code) => {
    setLoading(true);
    setError(null);

    try {
      // Fetch the student's name based on the code
      const students = await base("attendance")
        .select({
          filterByFormula: `{code} = '${code}'`,
        })
        .firstPage();

      if (students.length === 0) {
        throw new Error("No student found with the provided code.");
      }

      const studentName = students[0].fields.name;
      console.log(studentName, code);

      // Fetch related records
      const [attendanceRecords, homeworkRecords, assessmentsRecords] =
        await Promise.all([
          base("attendance")
            .select({ filterByFormula: `{Name} = '${studentName}'` })
            .firstPage(),
          base("quran")
            .select({ filterByFormula: `{Name} = '${studentName}'` })
            .firstPage(),
          base("assessments")
            .select({ filterByFormula: `{Name} = '${studentName}'` })
            .firstPage(),
        ]);

      setStudentRecords({
        name: studentName,
        attendance: attendanceRecords[0]?.fields,
        homework: homeworkRecords[0]?.fields,
        assessments: assessmentsRecords[0]?.fields,
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (studentCode) {
      fetchStudentData(studentCode);
    }
  };

  const renderRecordDetails = (record) => {
    console.log(record);
    return record ? (
      <div className="grid grid-cols-2 gap-2">
        {Object.entries(record)
          .sort((a, b) => a[0].localeCompare(b[0])) // Sorting by column name
          .map(([key, value]) => {
            if (key !== "name" && !key.includes("| hd") && key !== "code") {
              return (
                <div key={key} className="col-span-1">
                  <strong className="block text-sm font-semibold">
                    {key}:
                  </strong>
                  <span className="text-sm">{valueMap(value)}</span>
                </div>
              );
            }
            return null;
          })}
      </div>
    ) : (
      <p>No data</p>
    );
  };

  const valueMap = (v) => {
    if (v == "p") {
      return "Present";
    }
    if (v == "a") {
      return "Absent";
    }
    if (v == "e") {
      return "Excused Absence";
    }
    return v;
  };
  return (
    <div className="container mx-auto p-4">
      <div className="search-bar flex flex-col sm:flex-row items-center gap-2 mb-8">
        <input
          type="text"
          value={studentCode}
          onChange={(e) => setStudentCode(e.target.value)}
          placeholder="Enter student code"
          className="border p-2 flex-grow rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition duration-200 ease-in-out"
        >
          Search
        </button>
      </div>

      {loading && <div className="text-center p-4">Loading...</div>}
      {error && (
        <div className="text-red-600 text-center p-4">{error.message}</div>
      )}

      {studentRecords && (
        <div className="student-record card p-4 border rounded-lg shadow-lg bg-white">
          <h3 className="text-xl font-bold mb-4 text-center">
            Student: {studentRecords.name}
          </h3>
          <div className="assessments-details">
            <h4 className="font-semibold text-blue-700 mb-2">Assessments:</h4>
            {renderRecordDetails(studentRecords.assessments)}
          </div>
          <div className="attendance-details mb-6">
            <h4 className="font-semibold text-blue-700 mb-2">Attendance:</h4>
            {renderRecordDetails(studentRecords.attendance)}
          </div>
          <div className="homework-details mb-6">
            <h4 className="font-semibold text-blue-700 mb-2">Quran</h4>
            <p className="font-semibold text-sm mb-2">
              {"Passed Quran " +
                (Object.entries(studentRecords.homework).length - 2) +
                " out of " +
                Object.entries(studentRecords.attendance).length +
                " days"}
            </p>
            {renderRecordDetails(studentRecords.homework)}
          </div>
         
        </div>
      )}
    </div>
  );
};

export default Grades;
