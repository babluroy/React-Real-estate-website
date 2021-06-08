import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Container,
} from "react-bootstrap";
import Navbar from '../Components/navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase";
import { auth, database } from "../config";

export default function PublicProfiles() {
  //Authstate
  const [authState, setAuthState] = useState(null);
  const [userUid, setUserUid] = useState(null);
  const [profilesCheck, setProfilesCheck] = useState(null);
  //snapshots
  const [profiles, setProfiles] = useState([]);
   //spinner
   const [loading, setLoading] = useState(true)

   const [filterQuery, setFilterQuery] = useState("")
   console.log(filterQuery)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        setAuthState(false);
      } else {
        setAuthState(true);
        setUserUid(user.uid);
      }
    });
  }, []);

  
  useEffect(() => {

    const queryString = window.location.search;
    const RetrivedchildKey = queryString.substring(1);
    setFilterQuery(RetrivedchildKey);


    database
      .ref("properties")
      .once("value", (snapshot) => {
        if (snapshot.exists()) {
          setProfilesCheck(true);
          {setLoading(false)}
        } else {
          setProfilesCheck(false);
          {setLoading(false)}
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userUid]);
  //

  //get listing data
  useEffect(() => {
    database
      .ref("My-Profile")
      .orderByChild("filter")
      .equalTo(filterQuery)
      .on("value", (snapshot) => {
        const items = [];
        snapshot.forEach((childSnapshot) => {
          var childKey = childSnapshot.key;
          var data = childSnapshot.val();
          items.push({
            name: data.name,           
            city: data.city,
            thumbnail: data.thumbnail,
            homeSearch: data.homeSearch,
            email: data.email,
          });
        });
        setProfiles(items);
      });
  }, [userUid]);
  //

  return (
    <>
    <Navbar/>

    {/* Spinner */}  
    {loading==true ? <div className="sk-cube-grid">
  <div className="sk-cube sk-cube1"></div>
  <div className="sk-cube sk-cube2"></div>
  <div className="sk-cube sk-cube3"></div>
  <div className="sk-cube sk-cube4"></div>
  <div className="sk-cube sk-cube5"></div>
  <div className="sk-cube sk-cube6"></div>
  <div className="sk-cube sk-cube7"></div>
  <div className="sk-cube sk-cube8"></div>
  <div className="sk-cube sk-cube9"></div>
</div> : ""}

     
      <Container>
        <Row>
          {profiles.map((data, id) => (
           <Col sm={12} md={4} lg={4} key={uuidv4()}>
           <Card className="all-properties">
                <Card.Img
                  variant="top"
                  src={data.thumbnail}
                  className="my-listings-thumbnail"
                />
                <Card.Body>
                  <Card.Title className="text-dark">{data.name}</Card.Title>
                  <Card.Text className="text-dark">
                  <p>
                      {data.homeSearch == "Yes" ? "I'm Searching for homes": ""}
                    </p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {data.city}&nbsp;
                   <p className="pt-2">
                   <a href={`mailto:${data.email}`} ><FontAwesomeIcon icon={faEnvelope} />&nbsp;{data.email}</a>
                   </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
           
          ))}
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
}
