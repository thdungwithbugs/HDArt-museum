import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Container } from "react-bootstrap";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import { useEffect, useState } from "react";
import { searchData } from "./api";
import useDebounce from "./components/hooks/useDebounce";

function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);

  const searchDebounce = useDebounce(search, 700);
  useEffect(() => {
    if (!search || search.length === 0) {
      setResult(null);
      return;
    }
    searchData(searchDebounce)
      .then((results) => {
        if (results && results.data) {
          setResult(results.data);
        }
      })
      .catch((error) => console.log(error));
  }, [search, searchDebounce]);

  return (
    <>
      <div className="App">
        <header>
          <Navbar
            variant="dark"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem 0",
              background: "#22223b",
              width: "100vw",
              position: "fixed",
              top: 0,
              height: "5rem",
              zIndex: "1000",
            }}
          >
            <Navbar.Brand
              style={{
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              onClick={() => window.scrollTo(0, 0)}
            >
              HD ONLINE ART MUSEUM
            </Navbar.Brand>
            <img
              src="https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80"
              alt="logo"
              style={{
                width: 50,
                height: 50,
                borderRadius: "100%",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => window.scrollTo(0, 0)}
            />
          </Navbar>
        </header>
      </div>
      <div style={{ position: "relative", marginTop: "5rem" }}>
        <video
          id="background-video"
          autoPlay
          loop
          muted
          poster="https://images.unsplash.com/photo-1580136579312-94651dfd596d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1317&q=80"
          style={{ height: "80vh", width: "100vw", objectFit: "cover" }}
        >
          <source
            src="https://aic-web-cms-uploads.s3.us-east-2.amazonaws.com/dd4b5897-5f74-40f0-874b-f98f60bc45cd/Cezanne_Homepage_Loop_11.mp4"
            type="video/mp4"
          />
        </video>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "50vw",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "4rem",
              textAlign: "center",
            }}
          >
            Find Your Art Topic
          </h1>
          <Search
            search={search}
            onChange={(event) => setSearch(event.target.value)}
          ></Search>
        </div>
      </div>
      <main>
        <Container
          fluid
          style={{
            maxWidth: 1280,
            margin: "2rem auto",
            height: "auto",
          }}
        >
          <SearchResult result={result} />
        </Container>
      </main>
      <section
        className="exhibition"
        style={{ height: "auto", padding: "4rem 0" }}
      >
        <div className="container fluid">
          <h1
            style={{
              color: "#fcbf49",
              marginBottom: "1rem",
              marginLeft: "1.5rem",
            }}
          >
            NEWEST EXHIBITIONS
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://www.artic.edu/exhibitions/9626/igshaan-adams-desire-lines"
            target="_blank"
            rel="noreferrer noopener"
            className="exhibition_card"
            style={{ position: "relative", cursor: "pointer" }}
          >
            <img
              src="https://artic-web.imgix.net/cd6b38a1-cf53-4819-be64-3bd794c4fb7a/J6390_030-int.jpg?rect=0%2C250%2C3000%2C1688&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=3000&h=1688"
              alt=""
              style={{
                width: "40vw",
                height: "50vh",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
                color: "white",
                fontWeight: "bold",
                letterSpacing: "1px",
                background: "rgba(0,0,0,0.4)",
                padding: "5px",
              }}
            >
              <p>EXHIBITION</p>
              <h2>Igshaa Adams: Desire Lines</h2>
              <h3>Apr 2 - Aug 1, 2022</h3>
            </div>
          </a>
          <a
            href="https://www.artic.edu/exhibitions/9346/mel-bochner-drawings-a-retrospective"
            target="_blank"
            rel="noreferrer noopenner"
            className="exhibition_card"
            style={{ position: "relative", cursor: "pointer" }}
          >
            <img
              src="https://artic-web.imgix.net/a57eeb43-ceee-4e12-88ed-55a016ed3e89/08_Measurement_1_to_12_press2.jpg?rect=0%2C733%2C2227%2C1249&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=1500&h=841"
              alt=""
              style={{
                width: "40vw",
                height: "50vh",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
                color: "white",
                fontWeight: "bold",
                letterSpacing: "1px",
                background: "rgba(0,0,0,0.4)",
                padding: "5px",
              }}
            >
              <p>EXHIBITION</p>
              <h2>Mel Bochner: A Restrospective</h2>
              <h3>Apr 23 - Aug 22, 2022</h3>
            </div>
          </a>
          <a
            href="https://www.artic.edu/exhibitions/9761/life-and-afterlife-in-ancient-egypt"
            target="_blank"
            rel="noreferrer noopener"
            className="exhibition_card"
            style={{ position: "relative", cursor: "pointer" }}
          >
            <img
              src="https://artic-web.imgix.net/nullfc9cc2b2-5d29-45e2-b3e3-bdf084ccb91a/Mummy-Mask-IF.jpg?rect=0%2C267%2C1721%2C968&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=1000&h=562"
              alt=""
              style={{
                width: "40vw",
                height: "50vh",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
                color: "white",
                fontWeight: "bold",
                letterSpacing: "1px",
                background: "rgba(0,0,0,0.4)",
                padding: "5px",
              }}
            >
              <p>EXHIBITION</p>
              <h2>Life and Afterlife in Ancient Egypt</h2>
              <h3>Now Open</h3>
            </div>
          </a>
          <a
            href="https://www.artic.edu/exhibitions/9325/morris-and-company-the-business-of-beauty"
            target="_blank"
            rel="noreferrer noopener"
            className="exhibition_card"
            style={{ position: "relative", cursor: "pointer" }}
          >
            <img
              src="https://artic-web.imgix.net/dbf3bc42-4890-4cf7-8965-629e5326e1f0/IM041390-int_press.jpg?rect=91%2C1542%2C2126%2C1200&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=1000&h=563"
              alt=""
              style={{
                width: "40vw",
                height: "50vh",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
                color: "white",
                fontWeight: "bold",
                letterSpacing: "1px",
                background: "rgba(0,0,0,0.4)",
                padding: "5px",
              }}
            >
              <p>EXHIBITION</p>
              <h2>Morris: The Business of Beauty</h2>
              <h3>Dec 18, 2021 - Jun 13, 2022</h3>
            </div>
          </a>
        </div>
      </section>
      <section
        className="events"
        style={{ height: "auto", padding: "2rem 0 4rem 0" }}
      >
        <div className="container fluid">
          <h1
            style={{
              color: "#fcbf49",
              marginBottom: "1rem",
              marginLeft: "1.5rem",
            }}
          >
            RECENT EVENTS
          </h1>
        </div>
        {/* <div>
              <img src="https://artic-web.imgix.net/c318c2a7-8b3c-4944-97ee-cef6f9a9efc4/J2320-int_web.jpg?rect=0%2C150%2C2000%2C1122&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=400&h=225" alt="event_photo" />
              <p>MEMBER EXCLUSIVE</p>
              <h3>Member Preview: Cezanne</h3>
            </div> */}
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            gap: "1rem",
            padding: '0 2.4rem',
          }}
        >
          <a className="new_card"
            href="https://www.artic.edu/events/5418/member-preview-cezanne"
            rel="noreferrer noopener"
            target="_blank"
            style={{
              background:
                "url(https://artic-web.imgix.net/c318c2a7-8b3c-4944-97ee-cef6f9a9efc4/J2320-int_web.jpg?rect=0%2C150%2C2000%2C1122&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=400&h=225) ",
              height: "50vh",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                position: "absolute",
                color: "white",
                fontSize: "1rem",
                top: "1rem",
                left: "1rem",
              }}
            >
              <p>MEMBER EXCLUSIVE</p>
              <h3>Member Preview: Cezanne</h3>
              <span>May 12-14, 2022 | 10:00-5:00</span>
            </div>
          </a>
          <a className="new_card"
            href="https://www.artic.edu/events/5429/tour-highlights-of-the-modern-wing-thursday"
            rel="noreferrer noopener"
            target="_blank"
            style={{
              background:
                "url(https://artic-web.imgix.net/4340f9de-33fe-4ab0-9f27-058b613f0c2d/IM16907_021-web.jpg?rect=0%2C480%2C5760%2C3240&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=400&h=225) ",
              height: "50vh",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                position: "absolute",
                color: "white",
                fontSize: "1rem",
                top: "1rem",
                left: "1rem",
              }}
            >
              <p>TOUR</p>
              <h3>Tour: Highlights of Wing</h3>
              <span>Every Thursday | 12:00-12:30</span>
            </div>
          </a>
          <a className="new_card"
            href="https://www.artic.edu/events/5428/tour-highlights-of-the-art-institute-friday"
            rel="noreferrer noopener"
            target="_blank"
            style={{
              background:
                "url(https://artic-web.imgix.net/f58d5cf0-c8a6-4953-946f-ed77272567c9/CopyofIM031265_577-int1.jpg?rect=0%2C0%2C3000%2C1688&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=600&h=338) ",
              height: "50vh",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                position: "absolute",
                color: "white",
                fontSize: "1rem",
                top: "1rem",
                left: "1rem",
              }}
            >
              <p>TOUR</p>
              <h3>Tour: Highlights of Art</h3>
              <span>Every Friday | 12:00-12:30</span>
            </div>
          </a>
          <a className="new_card"
            href="https://www.artic.edu/events/5430/tour-highlights-of-the-modern-wing-saturday"
            rel="noreferrer noopener"
            target="_blank"
            style={{
              background:
                "url(https://artic-web.imgix.net/null86f35bed-1e19-4a92-9fcf-cedb3b8126c7/IM031265_502-int.jpg?rect=0%2C188%2C3000%2C1688&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=600&h=338) ",
              height: "50vh",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                position: "absolute",
                color: "white",
                fontSize: "1rem",
                top: "1rem",
                left: "1rem",
              }}
            >
              <p>TOUR</p>
              <h3>Tour: Highlights of Sunday</h3>
              <span>Every Saturday | 12:00-12:30</span>
            </div>
          </a>
        </div>
      </section>
      <footer
        style={{
          color: "white",
          textAlign: "center",
          background: "#22223b",
          padding: "4rem",
          bottom: 0,
          width: "100vw",
        }}
      >
        A simple website was coded by Hoang Dung by ReactJS and Bootstrap @
        using Art Institute of Chicago API.
      </footer>
    </>
  );
}

export default App;
