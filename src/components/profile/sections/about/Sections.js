import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import AboutSection from './Section';

const AboutSections = ({ ud }) => (
  <>
    <AboutSection label="Username" value={ud.username} />
    <AboutSection label="Name" value={`${ud.firstname} ${ud.surname}`} />
    <AboutSection label="Email" value={ud.email} />
    <AboutSection label="Bio" value={ud.bio} />

    <AboutSection label="Instagram" value={ud.instagram} isLink />
    <AboutSection label="Github" value={ud.github} isLink />
    <AboutSection label="Twitter" value={ud.twitter} isLink />
    <AboutSection label="Facebook" value={ud.facebook} isLink />
    <AboutSection label="Website" value={ud.website} isLink />
    <AboutSection label="Phone" value={ud.phone} />
    <AboutSection label="Joined" value={`${moment(ud.joined).fromNow()}`} />
  </>
);

const mapStateToProps = (state) => ({
  ud: state.User.user_details,
});

export default connect(mapStateToProps)(AboutSections);
