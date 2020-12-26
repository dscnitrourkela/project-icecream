import * as React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Card, Typography} from '@material-ui/core'

interface Props {
  cardName: string
}

const Item: React.FC<Props> = ({cardName}) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Typography>
        Hello This will be the frame card
      </Typography>
      <Typography>
        {cardName}
      </Typography>
    </Card>
  )
}

export default Item

const useStyles = makeStyles({
  root: {
    width: 275,
    minHeight: 400,
    backgroundColor: '#ddd'
  }
})