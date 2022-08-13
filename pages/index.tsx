import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

const Home: NextPage = () => {
  const { lang, t } = useTranslation("common");
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>

        <title>{ t("appName") }</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {t("appName")}
        </h1>
        
        <ul>
          {router.locales?.map((locale) =>
          (locale !== router.locale)?
           (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a>
                  <Button className='mt-5' variant='outline' onClick={()=> showNotification({
                    title: t("appName"),
                    message: t("greeting")
                  })}>
                    {t(locale)}
                  </Button>
                </a>
              </Link>
            </li>
          )
          : null)}
        </ul>

        <Button className='mt-5' variant='filled' onClick={()=> showNotification({
          title: t("appName"),
          message: t("greeting")
        })}>
          {t("show notification")}
        </Button>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
