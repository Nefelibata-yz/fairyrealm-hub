import Link from "next/link";
import { experimentSites, statusLabel } from "@/lib/sites";
import { getSessionToken } from "@/lib/get-session";

export default async function HubPage() {
  const token = await getSessionToken();

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-16">
      <p className="text-sm uppercase tracking-widest text-violet-400">hub</p>
      <h1 className="mt-2 text-4xl font-bold text-zinc-50">实验子站导航</h1>
      <p className="mt-4 max-w-xl text-zinc-400">
        通过二级域名拆分不同技术实验。主站{" "}
        <a href="https://fairyrealm.xyz" className="text-violet-400 hover:underline">
          fairyrealm.xyz
        </a>{" "}
        为品牌入口。
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
        {token ? (
          <span className="rounded-full border border-violet-800/60 px-3 py-1 text-violet-200">
            已登录（JWT）
          </span>
        ) : (
          <a
            href="https://auth.fairyrealm.xyz/login?callbackUrl=https://hub.fairyrealm.xyz"
            className="rounded-full bg-violet-600 px-3 py-1 text-white hover:bg-violet-500"
          >
            登录统一账号
          </a>
        )}
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {experimentSites.map((site) => (
          <li
            key={site.subdomain}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-violet-800/80"
          >
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-lg font-semibold text-zinc-100">{site.name}</h2>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${
                  site.status === "live"
                    ? "bg-emerald-950 text-emerald-400"
                    : site.status === "beta"
                      ? "bg-amber-950 text-amber-400"
                      : "bg-zinc-800 text-zinc-400"
                }`}
              >
                {statusLabel[site.status]}
              </span>
            </div>
            <p className="mt-1 font-mono text-sm text-violet-300">
              {site.subdomain}.fairyrealm.xyz
            </p>
            <p className="mt-2 text-sm text-zinc-500">{site.description}</p>
            {site.status !== "soon" ? (
              <a
                href={site.url}
                className="mt-4 inline-block text-sm text-violet-400 hover:underline"
              >
                进入 →
              </a>
            ) : (
              <span className="mt-4 inline-block text-sm text-zinc-600">建设中</span>
            )}
          </li>
        ))}
      </ul>

      <p className="mt-12 text-center text-sm text-zinc-600">
        <Link href="https://fairyrealm.xyz" className="hover:text-zinc-400">
          ← 返回主站
        </Link>
      </p>
    </main>
  );
}
