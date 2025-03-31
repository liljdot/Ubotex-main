import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quis quidem laudantium adipisci, maxime eius quibusdam aperiam itaque odio placeat labore deleniti nemo culpa dolorum repellendus est, quasi harum at necessitatibus? Reiciendis esse quaerat quisquam velit eius aliquid earum sit, hic enim expedita accusantium dolorem beatae quibusdam sint, quae quo, ullam veritatis aspernatur suscipit ad doloribus pariatur. Cum blanditiis et mollitia explicabo voluptatibus! Eaque, voluptatem id deleniti alias tempora quam quod earum perspiciatis, illo veniam sapiente. Enim, corrupti, explicabo cum illum libero iure hic iste temporibus doloremque suscipit sapiente sed numquam inventore, accusantium labore unde repellat voluptatum eum provident? Iure eaque adipisci debitis id temporibus facere rerum et consectetur totam dolore. Quidem, sunt. Alias, aperiam quaerat soluta repellat, voluptate ad deserunt, consequuntur vel impedit ea eveniet. Ad minima et aliquam consectetur, illo aliquid at quidem ipsam, incidunt aperiam eveniet impedit asperiores ut assumenda quis optio! Minima minus, numquam aut rem debitis eum explicabo aspernatur? Nisi est fugit nesciunt accusantium sequi dolores ipsum voluptas aspernatur facilis quod inventore ea voluptatibus soluta perspiciatis, officia itaque velit. Illum assumenda officia, quibusdam aspernatur odit suscipit ratione mollitia quisquam eum. Et odit ipsam tenetur neque aliquam fugiat fuga rerum praesentium molestias iusto. Porro recusandae, eius vel non asperiores laboriosam culpa dolorum et ut! Alias, officiis! Similique, magnam expedita. Quos consectetur dolor debitis impedit excepturi facilis laborum aperiam deserunt, mollitia recusandae nisi, fugit voluptatem numquam dolorem vitae, voluptatibus eaque optio omnis nesciunt aliquid minus illo doloremque officia harum! Magnam quae blanditiis voluptas sapiente odio sequi, commodi sed accusantium nihil deleniti exercitationem, itaque velit fuga eveniet dignissimos provident numquam excepturi incidunt, possimus eos. A quam facilis, aliquid nesciunt ipsa obcaecati minima exercitationem optio, soluta natus quod! Amet adipisci non magnam ipsa recusandae, possimus unde tenetur, cum modi odio dolorem ea enim necessitatibus eveniet excepturi id molestias est nisi rem. Aperiam magni expedita enim adipisci sequi fuga ea vero minus veniam repellat fugiat et id iure voluptate recusandae exercitationem vitae eos, voluptas ut tenetur repudiandae quas, quis suscipit. Necessitatibus, pariatur unde maxime sint placeat alias harum qui laboriosam perspiciatis eos nam eligendi, libero totam, veniam illo. Veniam, exercitationem minus. Magnam sed minima nemo harum rem incidunt atque corporis neque eaque velit at doloremque nihil assumenda similique, quia in porro fuga ex quisquam accusamus molestiae! Mollitia consectetur dolores quae voluptas ducimus impedit eos voluptatem! Nesciunt harum officiis culpa similique repellat nam pariatur id voluptates alias, laudantium recusandae, cum, accusantium porro provident! Assumenda harum magnam soluta nesciunt ipsum excepturi dolorum, tempore sapiente ab modi consectetur commodi repellendus. Tempore harum quo ea sint repellendus provident tenetur hic totam suscipit odit fugiat dolor officiis, assumenda doloremque. Omnis illo sunt voluptatum voluptatibus doloribus odit tenetur recusandae, doloremque ex perferendis dolore quibusdam iure, error dignissimos neque consequuntur deserunt a non tempore quos quia excepturi. Ea, temporibus dolores minus laborum porro quis libero provident sint iste quibusdam maiores, quaerat nam, earum ullam eius ratione dolore officia sunt repudiandae sed ad. Modi ad sit laudantium. Eaque ratione similique odio dicta at voluptas aperiam, labore quas totam!</h1>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
