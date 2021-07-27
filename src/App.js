import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Checkbox from '@material-ui/core/Checkbox'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import FavoriteIcon from '@material-ui/icons/Favorite'
import NavigationIcon from '@material-ui/icons/Navigation'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import Avatar from '@material-ui/core/Avatar'
import pic from './E8.jpg'
import Badge from '@material-ui/core/Badge'
import MailIcon from '@material-ui/icons/Mail'
import Chip from '@material-ui/core/Chip'
import FaceIcon from '@material-ui/icons/Face'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ImageIcon from '@material-ui/icons/Image'
import WorkIcon from '@material-ui/icons/Work'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import Divider from '@material-ui/core/Divider'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Tooltip from '@material-ui/core/Tooltip'
import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'
import { Hidden } from '@material-ui/core'

import './App.css'
import React from 'react'
import Progess1 from './Progess1'

function App () {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  )

  const handleDateChange = date => {
    setSelectedDate(date)
  }

  const [value, setValue] = React.useState('female')

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <>
      <h1>Hello</h1>
      <h3>Text Button</h3>
      <Button>CLick Me</Button> &nbsp;
      <Button color='secondary'>CLick Me</Button>&nbsp;
      <Button href='http://www.google.com' color='primary'>
        CLick Me to Google
      </Button>
      <h3>Text Button</h3>
      <Button variant='contained'>Click Me</Button>&nbsp;
      <Button variant='contained' color='primary'>
        Click Me
      </Button>
      &nbsp;
      <Button variant='contained' color='secondary'>
        Click Me
      </Button>
      &nbsp;
      <Button
        variant='outlined'
        color='secondary'
        href='http://www.instagram.com'
      >
        Click Me to Instagram
      </Button>
      &nbsp;
      <br></br>
      <h3>alert button</h3>
      <Button
        onClick={() => {
          alert('clicked')
        }}
      >
        Click me
      </Button>
      <h3>Icon with button</h3>
      <Button
        variant='contained'
        size='small'
        color='secondary'
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>{' '}
      &nbsp;
      <Button
        variant='contained'
        size='large'
        color='secondary'
        endIcon={<DeleteIcon />}
      >
        Delete
      </Button>{' '}
      &nbsp;
      <Button variant='contained' color='primary' endIcon={<Icon>send</Icon>}>
        Send
      </Button>{' '}
      &nbsp;
      <h3>Icon Button</h3>
      <IconButton variant='contained' color='secondary'>
        <DeleteIcon />
      </IconButton>
      <h3>Group Button</h3>
      <ButtonGroup color='primary' variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <h3>CheckBox Button</h3>
      <Checkbox />
      <Checkbox checked='true' />
      <Checkbox checked='true' color='primary' />
      <Checkbox defaultChecked indeterminate />
      <h3>Floating Button</h3>
      <Fab color='primary'>
        <AddIcon />
      </Fab>
      <Fab color='secondary'>
        <EditIcon />
      </Fab>
      <Fab variant='extended'>
        <NavigationIcon />
        Navigate
      </Fab>
      <Fab disabled>
        <FavoriteIcon />
      </Fab>
      <h3>Date Time</h3>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justifyContent='space-around'>
          <KeyboardDatePicker
            margin='normal'
            id='date-picker-dialog'
            label='Date picker dialog'
            format='MM/dd/yyyy'
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
          <KeyboardTimePicker
            margin='normal'
            id='time-picker'
            label='Time picker'
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time'
            }}
          />
          <form noValidate>
            <TextField
              id='time'
              label='Alarm clock'
              type='time'
              defaultValue='07:30'
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />
          </form>
        </Grid>
      </MuiPickersUtilsProvider>
      <h3>Radio Button</h3>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Gender</FormLabel>
        <RadioGroup
          aria-label='gender'
          name='gender1'
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value='female' control={<Radio />} label='Female' />
          <FormControlLabel value='male' control={<Radio />} label='Male' />
          <FormControlLabel value='other' control={<Radio />} label='Other' />
        </RadioGroup>
      </FormControl>
      <h3>slider </h3>
      <Typography id='continuous-slider' gutterBottom>
        Volume
      </Typography>
      <Slider aria-labelledby='continuous-slider' />
      <h3>Avtar and others msg</h3>
      <Avatar style={{ color: 'white', backgroundColor: '#ff5500' }}>M</Avatar>
      <Avatar src={pic} style={{ display: 'flex' }} /> <br />
      <Badge badgeContent={4} color='primary'>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color='primary' max={50}>
        <MailIcon />
      </Badge>
      <h3>Chip</h3>
      <Chip label='Basic' />
      <Chip label='Disabled' disabled />
      <Chip avatar={<Avatar>M</Avatar>} label='Clickable' />
      <Chip avatar={<Avatar alt='Natacha' src={pic} />} label='Deletable' />
      <Chip icon={<FaceIcon />} label='Clickable deletable' />
      <h3>Divider</h3>
      <List
        style={{ width: '100%', maxWidth: '360px', backgroundColor: 'grey' }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Photos' secondary='Jan 9, 2014' />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Work' secondary='Jan 7, 2014' />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Vacation' secondary='July 20, 2014' />
        </ListItem>
      </List>
      <h3>Tables</h3>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'>No</TableCell>
              <TableCell align='center'>Name</TableCell>
              <TableCell align='center'>Roll</TableCell>
              <TableCell align='center'>Class</TableCell>
              <TableCell align='center'>Subject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align='center' component='th' scope='row'>
                1
              </TableCell>
              <TableCell align='center'>Deep</TableCell>
              <TableCell align='center'>101</TableCell>
              <TableCell align='center'>4th</TableCell>
              <TableCell align='center'>Maths</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center' component='th' scope='row'>
                2
              </TableCell>
              <TableCell align='center'>Chirag</TableCell>
              <TableCell align='center'>103</TableCell>
              <TableCell align='center'>6th</TableCell>
              <TableCell align='center'>Maths</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <h3>Tooltip</h3>
      <Tooltip title='Delete'>
        <IconButton aria-label='delete'>
          <DeleteIcon />
        </IconButton>
      </Tooltip>{' '}
      <br />
      <Tooltip title='Add' aria-label='add'>
        <Fab color='primary'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <h3>Progress Bar</h3>
      <CircularProgress />
      <CircularProgress color='secondary' />
      <Progess1 />
      <h3>Grid</h3>
      <Grid container>
        <Grid item md={4} lg={3} sm={6} xs={12}>
          <Box bgcolor='yellow' p={5} textAlign='center'>
            1
            <Grid container>
              <Grid item xs={12} md={12}>
                <Box bgcolor='red' p={5} textAlign='center'>
                  11
                </Box>
              </Grid>
              <Grid item xs={12} md={12}>
                <Box bgcolor='green' p={5} textAlign='center'>
                  12
                </Box>
              </Grid>
              <Grid item xs={12} md={12}>
                <Box bgcolor='blue' p={5} textAlign='center'>
                  13
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item md={4} lg={3} sm={6} xs={12}>
          <Box bgcolor='red' p={5} textAlign='center'>
            2
          </Box>
        </Grid>
        <Grid item md={4} lg={3} sm={6} xs={12}>
          <Box bgcolor='blue' p={5} textAlign='center'>
            3
          </Box>
        </Grid>
        <Grid item md={4} lg={3} sm={6} xs={12}>
          <Box bgcolor='orange' p={5} textAlign='center'>
            4
          </Box>
        </Grid>
      </Grid>
      <hr />
      <Grid container>
        <Grid item md={4} lg={3} sm={6} xs={12}>
          <Box bgcolor='yellow' p={5} textAlign='center'>
            1
          </Box>
        </Grid>
        <Grid item md={4} lg={3} sm={6} xs={12}>
          <Box bgcolor='red' p={5} textAlign='center'>
            2
          </Box>
        </Grid>
        <Grid item md={4} lg={3} sm={6} xs={12}>
          <Box bgcolor='blue' p={5} textAlign='center'>
            3
          </Box>
        </Grid>
        <Hidden only="md">
          <Grid item md={4} lg={3} sm={6} xs={12}>
            <Box bgcolor='orange' p={5} textAlign='center'>
              4
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </>
  )
}

export default App
