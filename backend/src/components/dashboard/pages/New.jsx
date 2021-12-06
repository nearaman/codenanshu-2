import { Editor, Viewer } from "@bytemd/react";
import gfm from "@bytemd/plugin-gfm";
import footnotes from "@bytemd/plugin-footnotes";
import breaks from "@bytemd/plugin-breaks";
import frontmatter from "@bytemd/plugin-frontmatter";
import gemoji from "@bytemd/plugin-gemoji";
import highlight from "@bytemd/plugin-highlight";
import math from "@bytemd/plugin-math";
import mermaid from "@bytemd/plugin-mermaid";
import "bytemd/dist/index.min.css";
import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import axios from 'axios'

const plugins = [
  gfm(),
  footnotes(),
  breaks(),
  frontmatter(),
  gemoji(),
  highlight(),
  math(),
  mermaid(),
  // Add more plugins here
];

const New = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [dec, setDec] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [img, setImg] = useState({name: "image.here.webp"});

  useEffect(()=> {
    const handleMatter = () => {
    let matter = String.raw`---
title: "${title}"
date: "${date}"
description: "${dec}"
category: "${category}"
image: ./${img.name}
slug: ${slug}
---`;
    setValue(matter);
  };
    handleMatter()
  },[title, dec, category, date, img])

  // styling

  const inputFiled = { padding: 5, marginBottom: 20 };

  const handleTitle = async(e) => {
    setTitle(e.target.value)
    setSlug(`${e.target.value.replaceAll(" ", "-")}`)

  };
  const handleDec = async(e) => {
    await setDec(e.target.value);
  };
  const handleCategory = async(e) => {
    await setCategory(e.target.value);
  };
  const handleDate = async(e) => {
    await setDate(e.toDateString());
  };

  const handleUpload = () => {

    let form = new FormData();
    form.append("title", title);
    form.append("description", dec)
    form.append("slug", slug)
    form.append("category", category)
    form.append("date", date)
    form.append('image', img)
    form.append("content", value)

    axios.post("http://localhost:5000/create_post", form)
    .then(res=> console.log(res))
    }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            New Post
          </Typography>
          <Button onClick={handleUpload} color="inherit">Upload</Button>
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: 5,
          marginBottom: 5
        }}
      >
      <div
          style={{ marginBottom: 20, display: "flex", flexDirection: "column" }}
        >
          <label>Upload Hero Image</label>
          <input type="file" onChange={(e)=> setImg(e.target.files[0])} accept="image/x-png,image/webp,image/jpeg"/>
        </div>
        <div
          style={{ marginBottom: 20, display: "flex", flexDirection: "column" }}
        >
          <label>Enter Title</label>
          <TextField
            id="filled-basic"
            variant="filled"
            onChange={handleTitle}
            value={title}
          />
        </div>
        <div
          style={{ marginBottom: 20, display: "flex", flexDirection: "column" }}
        >
          <label>Enter Description</label>
          <TextField
            id="filled-basic"
            variant="filled"
            onChange={handleDec}
            value={dec}
          />
        </div>
        <LocalizationProvider
          dateAdapter={DateAdapter}
          sx={{ marginBottom: 20 }}
        >
          <label> Pick Date </label>
          <MobileDatePicker
            inputFormat="MM/dd/yyyy"
            value={date}
            onChange={handleDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <FormControl fullWidth sx={{
          marginTop: 3,
          marginBottom: 3
        }}>
          <label id="demo-simple-select-label">Category</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Age"
            onChange={handleCategory}
          >
            <MenuItem value={"blog"}>blog</MenuItem>
            <MenuItem value={"tutorial"}>tutorial</MenuItem>
            <MenuItem value={"notes"}>notes</MenuItem>
          </Select>
        </FormControl>
        <Editor
          id="editor"
          value={value}
          plugins={plugins}
          onChange={(v) => {
            setValue(v);
          }}
        />
      </Container>
    </div>
  );
};

export default New;
