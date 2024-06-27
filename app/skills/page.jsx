import Image from "next/image";

const Skills = () => {
  const data = [
    {
      skillId: "1",
      skillName: "HTML",
      skillImage:
        "https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png",
    },
    {
      skillId: "2",
      skillName: "CSS",
      skillImage:
        "https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png",
    },
    {
      skillId: "3",
      skillName: "Bootstrap",
      skillImage:
        "https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies.png",
    },
    {
      skillId: "4",
      skillName: "JAVASCRIPT",
      skillImage:
        "https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png",
    },
    {
      skillId: "5",
      skillName: "tailwindcss",
      skillImage:
        "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png",
    },
    {
      skillId: "6",
      skillName: "react",
      skillImage:
        "https://w7.pngwing.com/pngs/831/155/png-transparent-game-react-native-javascript-android-physics-symmetry-web-application-vuejs-thumbnail.png",
    },
    {
      skillId: "7",
      skillName: "nextjs",
      skillImage:
        " https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png",
    },
    {
      skillId: "8",
      skillName: "GITj",
      skillImage:
        "https://e7.pngegg.com/pngimages/685/833/png-clipart-red-sign-logo-git-logo-icons-logos-emojis-tech-companies-thumbnail.png",
    },
    {
      skillId: "8",
      skillName: "github",
      skillImage:
        "https://w7.pngwing.com/pngs/857/611/png-transparent-github-git-hub-logo-icon-thumbnail.png",
    },
    {
      skillId: "9",
      skillName: "npm",
      skillImage:
        "https://banner2.cleanpng.com/20180618/opl/kisspng-npm-node-js-computer-icons-computer-software-insta-5b278c9a4f9274.2530470115293185543259.jpg",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap justify-center items-center h-[80vh]  w-4/12">
        {data.map((skill) => (
          <div key={skill.skillId} className="p-2 m-2 rounded-lg border-2">
            <Image
              src={skill.skillImage}
              width={100}
              height={100}
              alt="skill_Image"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
