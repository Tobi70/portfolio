import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Alvaro Alanis, a passionate Front-End/AI developer
                specializing in creating innovative solutions and user-friendly
                interfaces.{" "}
              </p>
              <p className="text-white">
                I’m a Software Engineer with over five years of experience
                designing, developing, and optimizing scalable applications
                across warehouse management and web platforms. Currently working
                as a Full Stack Developer. I have strong experience in database
                optimization, API development, and deploying applications
                through CI/CD pipelines. With a background in Microsoft Dynamics
                Business Central and custom warehouse automation solutions, I
                enjoy solving complex operational challenges through clean,
                efficient code. I’m passionate about continuous learning,
                improving development practices, and building technology that
                creates measurable impact.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    In addition to my enterprise and warehouse management
                    experience, I developed a computer vision–based lumber
                    counting application that leverages YOLO object detection to
                    automate inventory analysis. The system uses a React
                    frontend with a FastAPI backend to process uploaded images
                    and detect lumber pieces in real time. I implemented
                    threshold controls, dynamic rendering of detection results,
                    and optimized backend prediction workflows to improve
                    accuracy and performance. This project strengthened my
                    experience in integrating AI models into production-ready
                    web applications and reinforced my ability to bridge machine
                    learning systems with intuitive, user-focused interfaces.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Alvaro Alanis, Creator of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">LumberAI</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
