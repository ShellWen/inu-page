import { FaHashtag, FaSteam, FaTelegram, FaTwitter, FaXbox } from 'react-icons/fa6'
import { IconType } from 'react-icons/lib/cjs/iconBase'

interface Contact {
  text: string
  url: string
  icon: IconType
}

function ContactItem({ contact }: { contact: Contact }) {
  const Icon = contact.icon
  return (
    <a href={contact.url} target="_blank" rel="noreferrer" className="text-lg leading-8">
      <Icon className="inline-block" />
      {` ${contact.text}`}
    </a>
  )
}

function ContactList({ contacts }: { contacts: Contact[] }) {
  return (
    <div className="mt-4">
      {contacts.map((contact, index) => (
        <>
          <ContactItem contact={contact} key={index} />
          {index !== contacts.length - 1 && <br />}
        </>
      ))}
    </div>
  )
}

function HashTag({ content }: { content: string }) {
  return (
    <span className="mr-2 text-lg text-blue-300">
      <FaHashtag className="inline h-4 w-4" /> {content}
    </span>
  )
}

function App() {
  const hashtags = ['Shiba', 'Furry', 'MaiMai']
  const contacts: Contact[] = [
    {
      text: '@Inu_Asakura',
      url: 'https://t.me/Inu_Asakura',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      icon: FaTelegram,
    },
    {
      text: '@u2f5d',
      url: 'https://twitter.com/u2f5d',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      icon: FaTwitter,
    },
    {
      text: '#AsakuraInuya',
      url: 'https://live.xbox.com/Profile?Gamertag=AsakuraInuya',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      icon: FaXbox,
    },
    {
      text: '@asakurainuya',
      url: 'https://steamcommunity.com/id/asakurainuya/',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      icon: FaSteam,
    },
  ]
  return (
    <main className="relative flex min-h-screen w-screen justify-center overflow-clip bg-gray-800 p-12 font-zpix text-gray-100 md:p-16">
      <div className="max-w-4xl">
        <header className="text-6xl">{"Inu's"}</header>
        <div className="mt-2 flex">
          {hashtags.map((hashtag, index) => (
            <HashTag key={index} content={hashtag} />
          ))}
        </div>
        <div className="mt-2">假装这里是 bio 然后随便写点什么加点假文的標準溝通是我的的時候，到一也覺得看了一</div>
        <div className="mt-2 text-xl">
          的標準溝通是我的的時候，到一也覺得看了一，一隻可以拿就知一直看台體，了超就很點了居書上面，年我書的人類的沒開，塔了所系列攤但是真的太。就是帶合作飛大大，講一提著沒是來去看，畫完褲應該有交換卡不啊這。的大家村裡，忍不住說到很多。
          這次海什麼是神的男人在⋯我也想想法不下去哈哈哈不是，時候抓了真水不上，交給不了要這順了吧什麼就還是。對方對對真的不，肖時欽最新的親友這就是下不，在意就知那是好想去。人生東西，為他們好想得很可自己有：麼可的人然後就的日本本來，比較克該在做⋯的視咖啡店長抽到大家一，畫出來她。
        </div>
        <ContactList contacts={contacts} />
      </div>
    </main>
  )
}

export default App
