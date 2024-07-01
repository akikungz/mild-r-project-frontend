import {
  Box,
  Container,
  Link,
  SpeedDial,
  SpeedDialAction,
  Stack,
  Typography,
} from '@mui/material'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { MdOutlineShare } from 'react-icons/md'

export default function BlogInfoPageView() {
  const actions = [
    { icon: <FaFacebook />, name: 'Facebook' },
    { icon: <FaInstagram />, name: 'Instagram' },
    { icon: <FaTwitter />, name: 'Twitter' },
  ]

  return (
    <Container className="mx-auto box-border flex w-full flex-auto flex-col">
      <Box className="h-[480px] w-full overflow-hidden bg-[linear-gradient(0deg,rgba(20,26,33,0.64),rgba(20,26,33,0.64)),url(https://api-prod-minimal-v6.vercel.app/assets/images/cover/cover-3.webp)] bg-cover bg-[position:center_center] bg-no-repeat">
        <Container
          maxWidth="lg"
          className="relative mx-auto box-border block h-[100%] w-[100%]"
        >
          <Typography
            variant="h3"
            className="z-9 absolute m-0 max-w-[480px] pt-[64px] font-[700] leading-[1.5] text-white"
          >
            Climate Change and Its Effects on Global Food Security
          </Typography>
          <Stack className="absolute bottom-0 left-0 flex w-full flex-col">
            <SpeedDial
              ariaLabel="Share post"
              direction="left"
              icon={<MdOutlineShare size={24} />}
              className="pointer-events-none absolute bottom-[64px] right-[24px] z-[1050] flex flex-row-reverse items-center"
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          </Stack>
        </Container>
      </Box>
      <Stack className="css-11phle0">
        <Typography variant="subtitle1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <div className="nml__markdown__root">
          <Typography variant="h1" className="nml__editor__content__heading">
            Heading H1
          </Typography>
          <Typography variant="h2" className="nml__editor__content__heading">
            Heading H2
          </Typography>
          <Typography variant="h3" className="nml__editor__content__heading">
            Heading H3
          </Typography>
          <Typography variant="h4" className="nml__editor__content__heading">
            Heading H4
          </Typography>
          <Typography variant="h5" className="nml__editor__content__heading">
            Heading H5
          </Typography>
          <Typography variant="h6" className="nml__editor__content__heading">
            Heading H6
          </Typography>
          <hr className="nml__editor__content__hr" />
          <Typography variant="h4" className="nml__editor__content__heading">
            Paragraph
          </Typography>
          <Typography paragraph>What is MTAweb Directory?</Typography>
          <Typography paragraph>
            So you have heard about this site or you have been to it, but you
            cannot figure out what it is or what it can do. MTA web directory is
            the simplest way in which one can bid on a link, or a few links if
            they wish to do so. The link directory on MTA displays all of the
            links it currently has, and does so in alphabetical order, which
            makes it much easier for someone to find what they are looking for
            if it is something specific and they do not want to go through all
            the other sites and links as well. It allows you to start your bid
            at the bottom and slowly work your way to the top of the list.
          </Typography>
          <Typography paragraph>
            With a very low costing starting bid of just $1, you are guaranteed
            to have a spot in MTA’s successful directory list. When you would
            like to increase your bid to one of the top positions, you have to
            know that this would be a wise decision to make as it will not only
            get your link to be at a higher point in the directory but it will
            also give you a chance to have your site advertised with the rest of
            the top ten on the home page of the website. This means that when
            visitors come to{' '}
            <Link
              href="http://MTAweb.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              MTAweb.com
            </Link>
            , your site will be one of the first things they see. In other
            words, you stand a great chance at getting a comeback to your site
            sooner than you thought.
          </Typography>
          <Typography paragraph>
            <strong>This is strong text.</strong>
          </Typography>
          <Typography paragraph>
            <em>This is italic text</em>
          </Typography>
          <Typography paragraph>This is underline text</Typography>
          <Typography variant="h4" className="nml__editor__content__heading">
            Unordered list
          </Typography>
          <ul className="nml__editor__content__bullet__list">
            <li className="nml__editor__content__listItem">
              <Typography paragraph>
                Implements{' '}
                <Link
                  href="https://docs-minimals.vercel.app/introduction"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  This is an external link
                </Link>
              </Typography>
            </li>
            <li className="nml__editor__content__listItem">
              <Typography paragraph>
                Implements{' '}
                <Link
                  href="https://codebeautify.org/dashboard/blog"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  This is an inside link
                </Link>
              </Typography>
            </li>
            <li className="nml__editor__content__listItem">
              <Typography paragraph>
                Renders actual, "native" React DOM elements
              </Typography>
            </li>
            <li className="nml__editor__content__listItem">
              <Typography paragraph>
                Allows you to escape or skip HTML (try toggling the checkboxes
                above)
              </Typography>
            </li>
            <li className="nml__editor__content__listItem">
              <Typography paragraph>
                If you escape or skip the HTML, no dangerouslySetInnerHTML is
                used! Yay!
              </Typography>
            </li>
          </ul>
          <Typography variant="h4" className="nml__editor__content__heading">
            Ordered list
          </Typography>
          <ol className="nml__editor__content__ordered__list">
            <li className="nml__editor__content__listItem">
              <Typography paragraph>Analysis</Typography>
            </li>
            <li className="nml__editor__content__listItem">
              <Typography paragraph>Design</Typography>
            </li>
            <li className="nml__editor__content__listItem">
              <Typography paragraph>Implementation</Typography>
            </li>
          </ol>
          <Typography variant="h4" className="nml__editor__content__heading">
            Blockquote
          </Typography>
          <blockquote className="nml__editor__content__blockquote">
            <Typography paragraph>
              Life is short, Smile while you still have teeth!
            </Typography>
          </blockquote>
          <Typography variant="h4" className="nml__editor__content__heading">
            Block code
          </Typography>
          <pre className="nml__editor__content__codeBlock">
            <code className="hljs language-javascript">
              <span className="hljs-keyword">for</span> (
              <span className="hljs-keyword">var</span> i=
              <span className="hljs-number">1</span>; i &lt;={' '}
              <span className="hljs-number">20</span>; i++) {'{'}
              <span className="hljs-keyword">if</span> (i %{' '}
              <span className="hljs-number">15</span> =={' '}
              <span className="hljs-number">0</span>)
              <span className="hljs-keyword">return</span>{' '}
              <span className="hljs-string">"FizzBuzz"</span>
              {'}'}
            </code>
          </pre>
        </div>
      </Stack>
    </Container>
    // <div>
    //   <div
    //     className="relative mx-auto mb-4 w-full md:mb-0"
    //     style={{ height: '24em' }}
    //   >
    //     <div
    //       className="z-2 absolute bottom-0 left-0 h-full w-full"
    //       style={{
    //         backgroundImage:
    //           'linear-gradient(180deg,transparent,rgba(0,0,0,.7))',
    //       }}
    //     />
    //     <img
    //       src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    //       className="absolute left-0 top-0 z-0 h-full w-full object-cover"
    //     />
    //     <div className="z-3 absolute bottom-0 left-0 p-4">
    //       <a
    //         href="#"
    //         className="mb-2 inline-flex items-center justify-center bg-black px-4 py-1 text-gray-200"
    //       >
    //         Nutrition
    //       </a>
    //       <h2 className="text-4xl font-semibold leading-tight text-gray-100">
    //         Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales,
    //         massa et auctor.
    //       </h2>
    //       <div className="mt-3 flex">
    //         <img
    //           src="https://randomuser.me/api/portraits/men/97.jpg"
    //           className="mr-2 h-10 w-10 rounded-full object-cover"
    //         />
    //         <div>
    //           <p className="text-sm font-semibold text-gray-200">
    //             {' '}
    //             Mike Sullivan{' '}
    //           </p>
    //           <p className="text-xs font-semibold text-gray-400"> 14 Aug </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mx-auto mt-12 max-w-screen-md px-4 text-lg leading-relaxed text-gray-700 lg:px-0">
    //     <p className="pb-6">
    //       Advantage old had otherwise sincerity dependent additions. It in
    //       adapted natural hastily is justice. Six draw you him full not mean
    //       evil. Prepare garrets it expense windows shewing do an. She projection
    //       advantages resolution son indulgence. Part sure on no long life am at
    //       ever. In songs above he as drawn to. Gay was outlived peculiar
    //       rendered led six.
    //     </p>
    //     <p className="pb-6">
    //       Difficulty on insensible reasonable in. From as went he they.
    //       Preference themselves me as thoroughly partiality considered on in
    //       estimating. Middletons acceptance discovered projecting so is so or.
    //       In or attachment inquietude remarkably comparison at an. Is surrounded
    //       prosperous stimulated am me discretion expression. But truth being
    //       state can she china widow. Occasional preference fat remarkably now
    //       projecting uncommonly dissimilar. Sentiments projection particular
    //       companions interested do at my delightful. Listening newspaper in
    //       advantage frankness to concluded unwilling.
    //     </p>
    //     <p className="pb-6">
    //       Adieus except say barton put feebly favour him. Entreaties unpleasant
    //       sufficient few pianoforte discovered uncommonly ask. Morning cousins
    //       amongst in mr weather do neither. Warmth object matter course active
    //       law spring six. Pursuit showing tedious unknown winding see had man
    //       add. And park eyes too more him. Simple excuse active had son wholly
    //       coming number add. Though all excuse ladies rather regard assure yet.
    //       If feelings so prospect no as raptures quitting.
    //     </p>
    //     <div className="mb-6 rounded border-l-4 border-gray-500 pl-4 italic">
    //       Sportsman do offending supported extremity breakfast by listening.
    //       Decisively advantages nor expression unpleasing she led met. Estate
    //       was tended ten boy nearer seemed. As so seeing latter he should thirty
    //       whence. Steepest speaking up attended it as. Made neat an on be gave
    //       show snug tore.
    //     </div>
    //     <p className="pb-6">
    //       Exquisite cordially mr happiness of neglected distrusts. Boisterous
    //       impossible unaffected he me everything. Is fine loud deal an rent open
    //       give. Find upon and sent spot song son eyes. Do endeavor he differed
    //       carriage is learning my graceful. Feel plan know is he like on pure.
    //       See burst found sir met think hopes are marry among. Delightful
    //       remarkably new assistance saw literature mrs favourable.
    //     </p>
    //     <h2 className="mb-4 mt-4 text-2xl font-semibold text-gray-800">
    //       Uneasy barton seeing remark happen his has
    //     </h2>
    //     <p className="pb-6">
    //       Guest it he tears aware as. Make my no cold of need. He been past in
    //       by my hard. Warmly thrown oh he common future. Otherwise concealed
    //       favourite frankness on be at dashwoods defective at. Sympathize
    //       interested simplicity at do projecting increasing terminated. As
    //       edward settle limits at in.
    //     </p>
    //     <p className="pb-6">
    //       Dashwood contempt on mr unlocked resolved provided of of. Stanhill
    //       wondered it it welcomed oh. Hundred no prudent he however smiling at
    //       an offence. If earnestly extremity he he propriety something admitting
    //       convinced ye. Pleasant in to although as if differed horrible. Mirth
    //       his quick its set front enjoy hoped had there. Who connection
    //       imprudence middletons too but increasing celebrated principles joy.
    //       Herself too improve gay winding ask expense are compact. New all paid
    //       few hard pure she.
    //     </p>
    //     <p className="pb-6">
    //       Breakfast agreeable incommode departure it an. By ignorant at on
    //       wondered relation. Enough at tastes really so cousin am of. Extensive
    //       therefore supported by extremity of contented. Is pursuit compact
    //       demesne invited elderly be. View him she roof tell her case has sigh.
    //       Moreover is possible he admitted sociable concerns. By in cold no less
    //       been sent hard hill.
    //     </p>
    //     <p className="pb-6">
    //       Detract yet delight written farther his general. If in so bred at dare
    //       rose lose good. Feel and make two real miss use easy. Celebrated
    //       delightful an especially increasing instrument am. Indulgence
    //       contrasted sufficient to unpleasant in in insensible favourable.
    //       Latter remark hunted enough vulgar say man. Sitting hearted on it
    //       without me.
    //     </p>
    //   </div>
    // </div>
  )
}
