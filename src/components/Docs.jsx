import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { GoCopy } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
import document from "../data/DocData";

function Docs() {
  const [copy, setCopy] = useState(false);
  const codeString = `npm i name `;

  return (
    <div className="ml-60 px-10 py-7">
      <div>
        {document.map((item, index) => (
          <div id={`${item.id}`} key={index}>
            <h2 className="font-poppins ml-2 text-primary font-semibold my-5 tracking-wide text-3xl">
              {item.heading}
            </h2>
            {item.code ? (
              <div className=" ml-3 max-w-4xl min-w-[35rem] bg-neutral-900 rounded-md overflow-hidden">
                <div className=" py-2 flex justify-between px-4 text-gray-300 text-xs items-center">
                  <p className=" text-sm">Code</p>
                  {copy ? (
                    <button className=" py-1 inline-flex text-sm items-center gap-1">
                      <FaCheck className=" text-lg" /> Copied!
                    </button>
                  ) : (
                    <button
                      className=" py-1 inline-flex text-sm items-center gap-1"
                      onClick={() => {
                        navigator.clipboard.writeText(codeString);
                        setCopy(true);
                        setTimeout(() => {
                          setCopy(false);
                        }, 3000);
                      }}
                    >
                      <GoCopy className=" text-lg" /> Copy Code
                    </button>
                  )}
                </div>
                <SyntaxHighlighter
                  language="javascript"
                  style={atomOneDark}
                  customStyle={{
                    padding: "25px",
                  }}
                  wrapLongLines={true}
                >
                  {item.code}
                </SyntaxHighlighter>
              </div>
            ) : (
              ""
            )}
            {item.content ? (
              <div>
                {item.content.map((item1, index) => (
                  <div key={index}>
                    <h2 className=" ml-3 my-2 text-primary font-poppins font-semibold text-xl ">
                      {item1.heading}
                    </h2>
                    {Array.isArray(item1.body) ? (
                      <div>
                        {item1.body.map((item2, index) => (
                          <div key={index}>
                            <p className=" ml-4.5 my-2 font-semibold text-primary font-poppins text-lg">
                              - {item2.point}
                            </p>
                            <p className=" ml-8 my-2 text-fourth font-poppins">
                              {item2.body}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className=" ml-4.5 my-2 font-poppins text-fourth">
                        {item1.body}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Docs;
