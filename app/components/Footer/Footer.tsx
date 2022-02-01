import {Group} from '@mantine/core'
import useStyles from './Footer.styles'
import {FOOTER_LINKS_DATA} from './data'
import {Text} from '@mantine/core'

export default function Footer() {
  const {classes} = useStyles()
  return (
    <footer className={classes.wrapper}>
      <Group position="center">
        {FOOTER_LINKS_DATA.map(({name, href, rel}) => (
          <Text
            className={classes.links}
            variant="link"
            component="a"
            href={href}
            rel={rel}
            key={name}
          >
            {name}
          </Text>
        ))}
      </Group>
    </footer>
  )
}
