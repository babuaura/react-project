import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogTitle, Typography} from '@mui/material';

export const TodoItems = ({todo, fetchDetailsById}) => {

    return (
        <>
        <Card sx ={{
            maxWidth:1000,
            display: "flex",
            flexDirection : "column",
            justifyContent : "space-between"
        }}>
            <CardContent>
                <Typography varient = "h5" color= {'text.secondary'}>{todo?.todo}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick = {() => { fetchDetailsById(todo?.id)} }
                    sx= {{
                    backgroundColor: '#000000', 
                    color :'#fff',
                    opacity: '0.9',
                    '&:hover' : {
                        backgroundColor: 'blue', 
                        color :'#fff',
                        opacity : '1'    
                    }
                    }}>Show Details</Button>
            </CardActions>
        </Card>
        </>
    )
};

export const TotoDetails = ({todoDetails, openDialog, setOpenDialog, setTodoDetails}) =>{
    
    return (
        <>
        <Dialog open = {openDialog} onClose={() => { setOpenDialog(false); }}>
            <DialogTitle>{todoDetails?.todo}</DialogTitle>
            <DialogActions>
                <Button onClick={() => {
                    setTodoDetails(null);
                    setOpenDialog(false);
                }}>Close</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}