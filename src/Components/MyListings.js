import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Container,
  Modal,
  handleClose,
  show,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faShower,
  faMapMarkerAlt,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase";
import { auth, database } from "../config";

export default function MyListings() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Authstate
  const [authState, setAuthState] = useState(null);
  const [userUid, setUserUid] = useState(null);
  const [listingsCheck, setListingsCheck] = useState(null);
  //snapshots
  const [listings, setListings] = useState([]);

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

  //TODO : setLoading status as false
  useEffect(() => {
    database
      .ref("properties")
      .orderByChild("userUid")
      .equalTo(userUid)
      .once("value", (snapshot) => {
        if (snapshot.exists()) {
          setListingsCheck(true);

        } else {
          setListingsCheck(false);
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
      .ref("properties")
      .orderByChild("userUid")
      .equalTo(userUid)
      .on("value", (snapshot) => {
        const items = [];
        snapshot.forEach((childSnapshot) => {
          var childKey = childSnapshot.key;
          var data = childSnapshot.val();
          items.push({
            key: childKey,
            title: data.title,
            imageOneURL: data.imageOneURL,
            bedrooms: data.bedrooms,
            bathrooms: data.bathrooms,
            city: data.city,
            per_month: data.per_month,
          });
        });
        setListings(items);
      });
  }, [userUid]);
  //

  return (
    <>
    {listingsCheck== true ?  <h2 className="text-center">My Listings</h2> : ""}
     
      <Container>
        <Row>
          {listings.map((data, id) => (
            <Col sm={12} md={4} lg={4} key={uuidv4()}>
              <Card className="mt-4">
                <Card.Img
                  variant="top"
                  src={data.imageOneURL}
                  className="my-listings-thumbnail"
                />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text className="p-2">
                    <FontAwesomeIcon icon={faBed} /> {data.bedrooms}&nbsp;
                    <FontAwesomeIcon icon={faShower} /> {data.bathrooms}&nbsp;
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {data.city}&nbsp;
                    <span className="p-2">
                      <FontAwesomeIcon icon={faRupeeSign} /> {data.per_month}
                    </span>
                  </Card.Text>

                  <Button variant="danger" onClick={handleShow}>
                    Delete
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>DevBud</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure?</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          const propertyDB = firebase
                            .database()
                            .ref("properties")
                            .child(data.key);
                          propertyDB.remove();
                          handleClose();
                        }}
                      >
                        Delete
                      </Button>
                    </Modal.Footer>
                  </Modal>
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
