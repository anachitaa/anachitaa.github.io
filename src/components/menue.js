import {React, useState} from 'react'
import './menue.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useCategory } from '../context/CategoryContext';

const Menue = () => {
  const { setActiveCategory } = useCategory();  


  const [about, setAbout] = useState(false);
  const [clothing, setClothing] = useState(false);
  const [others, setOthers] = useState(false);
  const [type, setType] = useState(false);
  const [publication, setPublcation] = useState(false);
  const [objects, setObjects] = useState(false);
  const [branding, setBranding] = useState(false);
  const [animations, setAnimations] = useState(false);

  return (
    <div className="menue-menue">
      <Link to="/" onClick={() => 
        {
          setClothing(false)
          setAbout(false)
          setAnimations(false);
          setBranding(false);
          setType(false);
          setObjects(false);
          setPublcation(false);
          setOthers(false);
          setActiveCategory('')
      }} className="menue-frame92"></Link>
      <div className="menue-frame84">
        <Link to="/about" onClick={() => {
          setAbout(!about)
          setAnimations(false);
          setBranding(false);
          setClothing(false);
          setType(false);
          setObjects(false);
          setPublcation(false);
          setOthers(false);
          }} className={`menue-frame841 ${about ? "about": ""}`}>
          <span className="menue-text">
            <span>about</span>
          </span>
        </Link>
        <Link to="/" onClick={() => {
          setClothing(!clothing)
          setAbout(false)
          setAnimations(false);
          setBranding(false);
          setType(false);
          setObjects(false);
          setPublcation(false);
          setOthers(false);
          setActiveCategory ? setActiveCategory(!clothing ? "clothing" : "") : null;
          }} className={`menue-frame85 ${clothing ? "clothing": ""}`}>
          <span className="menue-text02">
            <span>clothing</span>
          </span>
        </Link>
        <Link to="/" onClick={() => {
          setOthers(!others)
          setAbout(false)
          setAnimations(false);
          setBranding(false);
          setType(false);
          setObjects(false);
          setPublcation(false);
          setClothing(false);
          setActiveCategory ? setActiveCategory(!others ? "others" : "") : null;
          }} className={`menue-frame86 ${others ? "others": ""}`}>
          <span className="menue-text04">
            <span>others</span>
          </span>
        </Link>
        <Link to="/" onClick={() => {
          setType(!type)
          setOthers(false)
          setAbout(false)
          setAnimations(false);
          setBranding(false);
          setObjects(false);
          setPublcation(false);
          setClothing(false);
          setActiveCategory ? setActiveCategory(!type ? "type" : "") : null;
          }} className={`menue-frame87 ${type ? "type1": ""}`}>
          <span className="menue-text06">
            <span>type</span>
          </span>
        </Link>
        <Link to="/" onClick={() => {
          setPublcation(!publication)
          setType(false)
          setOthers(false)
          setAbout(false)
          setAnimations(false);
          setBranding(false);
          setObjects(false);
          setClothing(false);
          setActiveCategory ? setActiveCategory(!publication ? "publication" : "") : null;
          }} className={`menue-frame88 ${publication ? "publication": ""}`}>
          <span className="menue-text08">
            <span>publication</span>
          </span>
        </Link>
        <Link to="/" onClick={() => {
          setObjects(!objects)
          setPublcation(false)
          setType(false)
          setOthers(false)
          setAbout(false)
          setAnimations(false);
          setBranding(false);
          setClothing(false);
          setActiveCategory ? setActiveCategory(!objects ? "3d" : "") : null;
          }} className={`menue-frame89 ${objects ? "objects": ""}`}>
          <span className="menue-text10">
            <span>3D objects</span>
          </span>
        </Link>
        <Link to="/" onClick={() => {
          setBranding(!branding)
          setObjects(false)
          setPublcation(false)
          setType(false)
          setOthers(false)
          setAbout(false)
          setAnimations(false);
          setClothing(false);
          setActiveCategory ? setActiveCategory(!branding ? "branding" : "") : null;
          }} className={`menue-frame90 ${branding ? "branding": ""}`}>
          <span className="menue-text12">
            <span>branding</span>
          </span>
        </Link>
        <Link to="/" onClick={() => {
          setAnimations(!animations)
          setBranding(false)
          setObjects(false)
          setPublcation(false)
          setType(false)
          setOthers(false)
          setAbout(false)
          setClothing(false);
          setActiveCategory ? setActiveCategory(!animations ? "animations" : "") : null;
          }} className={`menue-frame91 ${animations ? "animations": ""}`}>
          <span className="menue-text14">
            <span>animations</span>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Menue