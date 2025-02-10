import React from "react";
import aipi from "../assets/c-aipi.png";
import andela from "../assets/c-andela.png";
import bict from "../assets/c-bict.png";
import ict from "../assets/c-ict.png";
import itek from "../assets/c-itek.png";
import klab from "../assets/c-klab.png";

const CompaniesTrustUs = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full text-green-900">
        <label className="font-bold text-4xl p-4">
          Companies we worked with
        </label>
      </div>
        <div className="flex justify-center items-center lg:flex-row flex-col gap-6 w-80 max-w-6xl text-center">
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col items-center">
              <div className="p-4 rounded-full w-50">
                <img src={aipi} alt="AIPI" className="w-full" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-4 rounded-full w-50">
                <img src={andela} alt="ANDELA" className="w-full" />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center">
            <div className="mb-10 flex flex-col items-center">
              <div className="p-4 rounded-full w-50">
                <img src={bict} alt="BICT" className="w-full" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 rounded-full w-50">
                <img src={ict} alt="ICT" className="w-full" />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col items-center">
              <div className="p-4 rounded-full w-50">
                <img src={itek} alt="ITEK" className="w-full" />
              </div>
            </div>

            <div className="mb-10 flex flex-col items-center">
              <div className="p-4 rounded-full w-50">
                <img src={klab} alt="KLAB" className="w-full" />
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default CompaniesTrustUs;
