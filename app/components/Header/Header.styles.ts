import {createStyles} from '@mantine/core'

export default createStyles((theme) => {
  return {
    wrapper: {
      paddingBottom: theme.spacing.md,
      paddingTop: theme.spacing.md
    },
    nav: {
      display: 'flex',
      flexDirection: 'column',
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md
    }
  }
})
