import Link from "next/link";
import ImgWrapper from "./_components/ImgWrapper";

type ListItemProps = {
  text: string;
  url: string;
  openInNewTab?: boolean;
};

export default function Home() {
  const listItems: ListItemProps[] = [
    { text: "About Me", url: "/about-me" },
    { text: "Projects", url: "/projects" },
    { text: "Blogs", url: "/blogs" },
    {
      text: "Resume",
      url: "https://docs.google.com/document/d/1hmAnLUzyZnam4OruBcmqhAUooTevUBL_0SgThi6Z-J4/edit?usp=sharing",
      openInNewTab: true,
    },
    {
      text: "Github",
      url: "https://github.com/chinmayghule",
    },
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/chinmayghule/",
    },
  ];

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-br from-[#1e1e28] to-[#4d4f60]">
      <section>
        <ImgWrapper />
        <h1 className="uppercase font-normal  text-2xl sm:text-4xl mt-8 text-center border-b-2 border-b-white pb-2">
          Chinmay Ghule
        </h1>

        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 list-none mt-8 mx-auto hover:text-[#aaa]">
          {listItems.map((item: ListItemProps, index: number) => (
            <ListItem
              key={item.text}
              text={item.text}
              url={item.url}
              duration={String((index + 1) * 0.25) + "s"}
              openInNewTab={item.openInNewTab}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

function ListItem({
  text,
  url,
  duration,
  openInNewTab = false,
}: {
  text: string;
  url: string;
  duration: string;
  openInNewTab?: boolean;
}) {
  return (
    <li
      className="uppercase font-bold tracking-wider text-sm sm:text-base transition-colors duration-300 animate-link-animate hover:text-white text-center"
      style={{ animationDuration: duration }}
    >
      <Link href={url} target={openInNewTab ? "_blank" : ""}>
        {text}
      </Link>
    </li>
  );
}
