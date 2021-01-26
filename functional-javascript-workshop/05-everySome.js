function checkUsersValid ( goodUsers ) {
  return function allUsersValid ( submittedUsers ) {
	  return submittedUsers.every( function ( element ) {
	    return goodUsers.some( function ( element2 ) {
		    return element.id === element2.id;
		  });
    });
  }
}

module.exports = checkUsersValid;
