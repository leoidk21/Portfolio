import PageTitle from "../components/PageTitle";
import Reveal from "../components/HomeComponents/Reveal";
import CertificateIntro from "../components/CertificateComponents/CertificateIntro";
import CertificateImages from "../components/CertificateComponents/CertificateImages";

function Certifications() {
    return (
        <>
            <Reveal>
                <PageTitle text="Certifications"/>
            </Reveal>
                
            <CertificateIntro />

            <CertificateImages />
        </>
    );
}

export default Certifications;