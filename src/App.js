
import './App.css';
import { Navbar } from "./coponenets/Navbar";
import { SideMenu } from "./coponenets/SideMenu";
import { VideoGrids } from "./coponenets/VideoGrids";
//import {storage,ref,getDownloadURL,storageRef,uploadBytes} from './Firebase';
import logo from './images/logoyt.png';
import video from "./videos/Myvideo.mp4"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import channelbanner from './images/bannerimg.jpg';
import { Comments } from './coponenets/Comments';
import { ExplorePage } from './coponenets/ExplorePage.js'
import { Description } from './coponenets/Description'
import { Recommendation } from './coponenets/Recommendation'
import { VideoPlayer } from './coponenets/VideoPlayer';
import { ChannelBanner } from './coponenets/ChannelBanner';
import { ChannelNav } from './coponenets/ChannelNav';
import { ChannelCoverVideo } from './coponenets/ChannelCoverVideo';
import { SearchResultVid } from './coponenets/SearchResultVid';
import {ChannelPageVid} from './coponenets/ChannelPageVid';
import {ChannelAboutPage} from './coponenets/ChannelAboutPage';
import {SignUp} from './coponenets/SignUp';
import {SignIn} from './coponenets/SignIn'
//import { useEffect, useState } from 'react';

function App() {
  

  return (
    <>
      <Router>
       
        <Navbar />
        <Switch>

          {/* Search Result Page */}

          <Route path='/searchRes'>
            <div className="sidemenu_channel">
              <SideMenu />
            </div>
            <div className="searchPage">
              <SearchResultVid />
            </div>

          </Route>


          {/* video page */}
          <Route path="/video/:videoId">
                

            <div className="mainvideo">

              <VideoPlayer />
            </div>
            <div className="other">
              <div className="desccomm">
                <Description />
                <strong> <h4>Comments</h4></strong>
                <Comments className="avatar2" image={logo} username="USERNAME" />

              </div>
              <div className="recommended">
                <Recommendation />
              </div>
            </div>
          </Route>
          {/*SignUpPage */}
          <Route  path='/signup' >
            <SignUp/>
        


          </Route>
          <Route path ='/signin'>
            <SignIn/>
          </Route>
























          {/* channel page */}


          <Route path="/channelPage/:channelId" >
            <div className="channel">

              <div className="sidemenu_channel">
                <SideMenu />
              </div>

              <div className="channelpage">
                <ChannelBanner img={channelbanner} />
                <ChannelNav  />

                {/*Channel Page Default */}

                <Route path='/channelPage/:channelId/channelhome'>
                <div className="coverVide">
                  <ChannelCoverVideo vid={video} />
                </div>
               </Route>

               {/*Channel Videos */}

               <Route path='/channelPage/:channelId/channelVid'>
                <ChannelPageVid/>
               </Route>

               {/*About Channel */}

               <Route path='/channelPage/:channelId/channelAbout'>
                <ChannelAboutPage/>
               </Route>


              </div>

            </div>
          </Route>

          {/*landing Page  */}

          <Route exact path="/">
            <div className="page">
              <div className="sidemenu">
                <SideMenu />
              </div>

              <div className="videogrid">
             
                <VideoGrids feed ={"Recommended"}/>
              </div>
            </div>


          </Route>
          {/*Subscription Page */}
          <Route exact path="/subscriptions" > 
          
          <div className="page">
              <div className="sidemenu">
                <SideMenu />
              </div>

              <div className="videogrid">
             
                <VideoGrids feed ={"Subscription"}/>
              </div>
            </div>

          </Route>

          {/*Explore Page */}
          <Route path="/explorefeed" >
          <div className="sidemenu">
                <SideMenu />
          
          </div>
          <div className="searchPage">
              <ExplorePage />
            </div>

          </Route>

        


        </Switch>

      </Router>
    </>
  );
}

export default App;
