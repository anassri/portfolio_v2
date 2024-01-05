import { FunctionComponent } from "react";

export const About: FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-y-4 max-w-[35rem] text-gray leading-7 opacity-95 mx-4 lg:mx-0">
      <p>
        Hey there! My name is <b>Ammar Nassri</b>. I'm a software engineer with
        a <b>Computer Engineering </b> degree, a master's in <b>Animation</b>,
        and a <b>web development </b>
        bootcamp background. In 2020, I dove into web development to craft tech
        that adds some sunshine to life.
      </p>
      <p>
        I'm currently at <b>Build.com</b>, cooking up features for the coolest
        ecommerce store.
      </p>
      <p>
        Beyond code, you'll find me immersed in personal projects, exploring new
        tech, or balancing life with <b>woodworking</b>, gym sessions, and
        <b> family </b> time. Cheers to the dynamic dance between pixels and
        real-world adventures!
      </p>
    </div>
  );
};
