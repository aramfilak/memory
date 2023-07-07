import {
  AiFillCar,
  AiFillAndroid,
  AiFillAlert,
  AiFillApple,
  AiFillAppstore,
  AiFillBug,
  AiFillChrome,
  AiFillDislike,
  AiFillFacebook,
  AiFillHtml5,
  AiFillGithub,
  AiFillInstagram,
  AiFillDashboard,
  AiFillCustomerService,
  AiFillPhone,
  AiFillRedditCircle,
  AiFillSketchCircle,
  AiFillSkype,
} from 'react-icons/ai'

function generateRandomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

function shuffleArray(array: Array<unknown>): Array<unknown> {
  for (let i = 0; i < array.length; i++) {
    const rand = generateRandomInt(0, array.length - 1)
    ;[array[i], array[rand]] = [array[rand], array[i]]
  }

  return array
}

function generateNumbersGrid(size: number): Array<number> {
  const array = []

  for (let i = 0; i < size / 2; i++) {
    array.push(i, i)
  }
  shuffleArray(array)

  return array
}

function generateIconsGrid(size: number): Array<JSX.Element> {
  const icons = [
    <AiFillCar />,
    <AiFillCar />,
    <AiFillAndroid />,
    <AiFillAndroid />,
    <AiFillAlert />,
    <AiFillAlert />,
    <AiFillApple />,
    <AiFillApple />,
    <AiFillAppstore />,
    <AiFillAppstore />,
    <AiFillBug />,
    <AiFillBug />,
    <AiFillChrome />,
    <AiFillChrome />,
    <AiFillDislike />,
    <AiFillDislike />,
    <AiFillFacebook />,
    <AiFillFacebook />,
    <AiFillHtml5 />,
    <AiFillHtml5 />,
    <AiFillGithub />,
    <AiFillGithub />,
    <AiFillInstagram />,
    <AiFillInstagram />,
    <AiFillDashboard />,
    <AiFillDashboard />,
    <AiFillCustomerService />,
    <AiFillCustomerService />,
    <AiFillPhone />,
    <AiFillPhone />,
    <AiFillRedditCircle />,
    <AiFillRedditCircle />,
    <AiFillSketchCircle />,
    <AiFillSketchCircle />,
    <AiFillSkype />,
    <AiFillSkype />,
  ]
  icons.push(...icons)
  const array = icons.slice(0, size)

  shuffleArray(array)
  return array
}

export { generateIconsGrid, generateNumbersGrid }
