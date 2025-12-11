import React from "react";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Help Software Engineers Land Roles - Mubarak Muse",
  description: "Get access to 176+ open roles, free mock coding interviews, and career advice from a senior software engineer.",
  keywords: ["software engineer jobs", "mock coding interview", "career help", "job search", "technical interview practice"],
  canonicalUrlRelative: "/software-engineers",
});

const SoftwareEngineers = () => {
  return (
    <div style={{ 
      backgroundColor: '#D3D3D3', 
      fontFamily: 'Times New Roman, serif',
      color: '#000000',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#FFFFFF', padding: '20px', border: '3px solid #000000' }}>
        <div style={{ marginBottom: '20px', textAlign: 'center', borderBottom: '2px solid #000000', paddingBottom: '10px' }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
            color: '#0000FF',
            margin: 0
          }}>
            Helping Software Engineers
          </h1>
        </div>

        <div style={{ marginBottom: '30px', border: '1px solid #000000', padding: '15px', backgroundColor: '#F0F0F0' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0000FF', marginBottom: '10px', fontFamily: 'Arial, sans-serif' }}>
            Who am I
          </h2>
          <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
            <p style={{ marginBottom: '10px' }}>
              I'm Mubarak. I've been a software engineer for 8+ years. I worked at Amazon and Collective Health, and I was an Interview Engineer at{" "}
              <a href="https://www.karat.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0000FF', textDecoration: 'underline' }}>
                Karat
              </a>
              {" "}where I did technical interviews.
            </p>
            <p>
              Now I run BrighterTunnel.com where I help companies interview candidates. I also help engineers find jobs through Paraform.com.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '30px', border: '1px solid #000000', padding: '15px', backgroundColor: '#F0F0F0' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0000FF', marginBottom: '15px', fontFamily: 'Arial, sans-serif' }}>
            How I can help
          </h2>
          
          <div style={{ marginBottom: '20px', borderLeft: '3px solid #0000FF', paddingLeft: '10px' }}>
            <p style={{ marginBottom: '5px', fontSize: '14px', fontWeight: 'bold', color: '#0000FF' }}>
              1. Job matching
            </p>
            <p style={{ marginBottom: '5px', fontSize: '14px', lineHeight: '1.6' }}>
              I have access to 176+ software engineer roles. Want me to help match you? Fill out this form:{" "}
              <a 
                href="https://www.paraform.com/forms/cldwr0h5i0003l20fp3dfbwxh" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#0000FF', textDecoration: 'underline' }}
              >
                paraform.com/forms/cldwr0h5i0003l20fp3dfbwxh
              </a>
            </p>
            <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.6' }}>
              Or just email me your resume:{" "}
              <a href="mailto:mubarak014@gmail.com?subject=Resume for SWE Roles&body=Hi Mubarak,%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0AThanks!" style={{ color: '#0000FF', textDecoration: 'underline' }}>mubarak014@gmail.com</a>
            </p>
          </div>

          <div style={{ marginBottom: '20px', borderLeft: '3px solid #0000FF', paddingLeft: '10px' }}>
            <p style={{ marginBottom: '5px', fontSize: '14px', fontWeight: 'bold', color: '#0000FF' }}>
              2. Free mock interview
            </p>
            <p style={{ marginBottom: '5px', fontSize: '14px', lineHeight: '1.6' }}>
              Need practice before your real interview? Book a free 45-minute mock coding interview with me.
            </p>
            <p style={{ margin: '0', fontSize: '14px' }}>
              <a 
                href="https://cal.com/mubarak-muse-14pidz/45-min-mock-coding-interview" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#0000FF', textDecoration: 'underline' }}
              >
                cal.com/mubarak-muse-14pidz/45-min-mock-coding-interview
              </a>
            </p>
          </div>

          <div style={{ marginBottom: '20px', borderLeft: '3px solid #0000FF', paddingLeft: '10px' }}>
            <p style={{ marginBottom: '5px', fontSize: '14px', fontWeight: 'bold', color: '#0000FF' }}>
              3. Helpful reads
            </p>
            <p style={{ margin: '0', fontSize: '14px' }}>
              <a 
                href="https://nextplayso.substack.com/p/the-guide-to-getting-a-job-with-cold" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#0000FF', textDecoration: 'underline' }}
              >
                How to get a job with cold email →
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareEngineers;

