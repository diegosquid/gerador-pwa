import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SaveIcon from '@material-ui/icons/Save'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  bottomNav: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    borderTop: '1px solid #e6e6e6'
  }
})

export default function BottomNav ({ page, handlePageChange }) {
  const classes = useStyles()

  return (
    <BottomNavigation
      value={page}
      onChange={(event, newValue) => {
        handlePageChange(newValue)
      }}
      showLabels
      className={classes.bottomNav}
    >
      <BottomNavigationAction label='Gerador' icon={<AccountCircleIcon />} />
      <BottomNavigationAction label='Jogos Salvos' icon={<SaveIcon />} />
    </BottomNavigation>
  )
}
