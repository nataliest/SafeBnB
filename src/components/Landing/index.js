import React from 'react';

const LandingPage = () =>
  <div className="landing">
    <section>
    	<h1>Welcome to SafeBnB</h1>
    	<br />
	    <h3>Our mission</h3>
	    <p>To connect victims of domestic abuse to places to stay by connecting them to those in their community who have a spare room they are willing to share</p>
    </section>
    <section>
	    <h3>How it works</h3>
	    <br />
	    <div className="row">
	    	<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			    <h5>Have a place?</h5>
			    <p>Add details about your place, such as the address, other residents, and pets. Upload a picture of the room, and confirm that guests will be living in a clean environment with adequate heating (as per New York State law), access to a bathroom and clean water.</p>
			    <p>When someone in your community is in need, you will receive an alert. If you respond to the request within a few hours, a match is confirmed.</p>
	        </div>
	        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			    <h5>Need a place?</h5>
			    <p>Input your zip code and specify any needs you have for a living environment, such as pet allergies or triggers. Within a few hours, you will be alerted with a community member's address.</p>
			    <p>At any time during or after your stay, leave a review of your host. Flagging a host will result in a suspension of their account.</p>
	    	</div>
	    </div>
	</section>
	<section>
	    <h3>What about privacy and safety?</h3>
	    <br />
	    <p>Privacy and safety are extremely important to us.</p>
		<p><strong>Before matching begins,</strong> all users' profile details are kept private.</p>
		<p><strong>During the matching process,</strong> the potential host is alerted of a need in their community but does not receive any details about the guest.</p>
		<p><strong>Once the match is confirmed,</strong> the host knows only the guest's first name. The guest knows the host's first name and information about the space.</p>
		<p><strong>After the stay,</strong> the guest leaves a review of the space and host. Any hosts who are flagged will immediately have their accounts suspended and subject to review.</p>
	</section>
  </div>

export default LandingPage;
