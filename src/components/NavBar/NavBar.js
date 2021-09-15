import React, { useState } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { getMovies } from "../../redux/actions";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    title: {
        display: 'none',
        justifyContent: 'center',
        textDecoration: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        width: '100%',
        marginLeft: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (title === "") return null;
        dispatch(getMovies(title));
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <form className={classes.search} onSubmit={handleSubmit}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                            onSubmit={handleSubmit}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </form>

                    <Typography className={classes.title} variant="h6" >
                        <Link href="/" color="inherit">
                            Movies culture time!
                        </Link>
                    </Typography>

                    <IconButton edge="end" color="inherit">
                        <Link href="/favs" color="inherit">
                            <FavoriteIcon />
                        </Link>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </>
    );
}
