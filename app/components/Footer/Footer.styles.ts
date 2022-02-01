import {createStyles} from '@mantine/core'

export default createStyles((theme) => {
  return {
    wrapper: {
      paddingBottom: theme.spacing.md,
      paddingTop: theme.spacing.md
    },
    links: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black
    }
  }
})
