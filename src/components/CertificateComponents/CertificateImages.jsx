import Reveal from "../HomeComponents/Reveal";
import cert1 from "../../assets/certificates/DOCQUEUE.jpg";
import cert2 from "../../assets/certificates/BSIT_Pre_Deployment.jpg";
import cert3 from "../../assets/certificates/ICS_Seminar.jpg";
import cert4 from "../../assets/certificates/freeCodeCamp.png";
import cert5 from "../../assets/certificates/Developing_Design_for_User_Interface.jpg";
import cert6 from "../../assets/certificates/Digital_ Safety.jpg";
import cert7 from "../../assets/certificates/Game_Art_Webinar.jpg";
import cert8 from "../../assets/certificates/Intro_to_Data_Analytics.jpg";
import cert9 from "../../assets/certificates/Intro_to_SharePoint.jpg";

function CertificateImages() {
    const certificate = [cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8, cert9];

    return (
        <div className="w-full pl-10 lg:pl-40">
            <div className="mt-20 lg:mt-44 mb-30">
                <div className="flex w-full overflow-x-auto items-center gap-5 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
                    {certificate.map((certs, index) => (
                        <div
                            key={index}
                            className="shrink-0"
                        >
                            <Reveal delay={0.4}>
                                <img
                                    src={certs}
                                    alt={`Certificate ${index + 1}`}
                                    className="h-50 w-70 lg:h-85 lg:w-120 object-cover rounded-lg"
                                />
                            </Reveal>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CertificateImages;