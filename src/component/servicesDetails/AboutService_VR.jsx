import Link from "next/link";
import React from "react";

function AboutService() {

    return (
        <section className="aai-about-service">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <h2 style={{ color: 'white', fontWeight: 700 }}>iFluent AR Headset
                            </h2>
                            <p className="section-desc mb-4">
                                Size:255mmX195mmX106mm
                            </p>
                        </div>
                        <div>
                            <h2 style={{ color: 'white', fontWeight: 700 }}>Device Interface
                            </h2>
                            <p className="section-desc mb-4">
                                Acts as the primary interface for users to enter the VR learning modules, providing a gateway to immersive educational content.
                                Comfort and Usability: Designed to be comfortable for extended use with intuitive controls, making it accessible for users of various ages and abilities.

                            </p>
                        </div>
                        <div>
                            <h2 style={{ color: 'white', fontWeight: 700 }}>Subject-Specific Scenarios
                            </h2>
                            <p className="section-desc mb-4">
                                Offers a range of VR experiences tailored to different subjects, such as exploring historical sites for history lessons or manipulating molecules for chemistry classes
                            </p>
                        </div>
                        <div>
                            <h2 style={{ color: 'white', fontWeight: 700 }}>Hands-On Learning
                            </h2>
                            <p className="section-desc mb-4">
                                Facilitates active learning by allowing users to manipulate virtual objects and environments, providing a kinaesthetic component to the educational experience.
                            </p>
                        </div>
                        <div>
                            <h2 style={{ color: 'white', fontWeight: 700 }}>Customizable Environments
                            </h2>
                            <p className="section-desc mb-4">
                                user can customize these modules to align with their lesson plans and objectives, ensuring a consistent and relevant learning journey,Engagement Tracking
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutService;
