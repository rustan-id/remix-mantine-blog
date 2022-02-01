import {Avatar, Burger, Drawer, Group, Title} from '@mantine/core'
import {Switch, useMantineColorScheme} from '@mantine/core'
import {Link, NavLink} from 'remix'
import useStyles from './Header.styles'
import {HEADER_LINK_DATA} from './data'
import {useState} from 'react'

export default function Header() {
  const [opened, setOpened] = useState(false)
  const {classes} = useStyles()
  const {colorScheme, toggleColorScheme} = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const activeStyle = {
    textDecoration: 'underline'
  }
  const title = opened ? 'Close navigation' : 'Open navigation'

  return (
    <header className={classes.wrapper}>
      <Group grow>
        <Group>
          <Link to="/">
            <Avatar
              src="https://secure.gravatar.com/avatar/28af3e39c0a1fe4c31367c7e9a8bcac3"
              alt="it's me"
            />
          </Link>
          <Title order={1}>Greg Rickaby</Title>
        </Group>
        <Group position="right">
          <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            title="Menu"
            position="right"
            hideCloseButton={true}
          >
            <Switch
              color={dark ? 'yellow' : 'blue'}
              label="Dark theme"
              onClick={() => toggleColorScheme()}
            />
            <nav>
              {HEADER_LINK_DATA.map(({name, href}) => (
                <NavLink
                  className={classes.nav}
                  to={href}
                  key={name}
                  style={({isActive}) => (isActive ? activeStyle : null)}
                >
                  {name}
                </NavLink>
              ))}
            </nav>
          </Drawer>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
          />
        </Group>
      </Group>
    </header>
  )
}
