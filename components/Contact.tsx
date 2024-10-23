import React from "react";

export default function Contact() {
  return (
    <div>
      <section className="flex justify-center" id="contact">
      <div>
        <h1 className="text-center pt-2 text-gray-50 text-3xl font-semibold">
          Contact Me
        </h1>
        <ul className="flex justify-center">
          <li className="p-4">
            <a
              href="mailto:br199946@ucf.edu"
              className="bg-gray-50 text-gray-950 px-4 py-2 rounded-lg"
            >
              Email
            </a>
          </li>
          <li className="p-4">
            <a
              href="/BrunoFregosoFriasResume.pdf"
              target="_blank"
              className="bg-gray-50 text-gray-950 px-4 py-2 rounded-lg"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </section>
    <p className="text-center text-2xl mt-14">Click anywhere to close!</p>
    </div>
  );
}
