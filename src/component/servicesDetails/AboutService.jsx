import Link from "next/link";
import React from "react";

function AboutService() {
  return (
    <section className="aai-about-service">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <h2 className="section-title">Smart Profiling</h2>
              <p className="section-desc mb-4">
                Builds a comprehensive profile of each user, including academic history, learning habits, and performance trends.
              </p>
            </div>
            <div>
              <h2 className="section-title">Educational Background Analysis</h2>
              <p className="section-desc mb-4">
                Considers previous educational experiences to contextualize current performance and expectations
              </p>
            </div>
            <div style={{marginTop:100}}>
              <h2 className="section-title">Content Filtering</h2>
              <p className="section-desc mb-4">
                Selects from a vast library of educational content to find the most suitable materials based on the user’s profile.
              </p>
            </div>
            <div>
              <h2 className="section-title">Analysis Tools</h2>
              <p className="section-desc mb-4">
                Utilizes advanced data analytics tools to dissect user’s data and extract actionable insights for further personalization
                Feedback Loop: Continuously updates user’s profiles based on performance and feedback to refine the learning experience.
              </p>
            </div>
          </div>
        </div>
      </div>      
    </section>
  );
}

export default AboutService;
