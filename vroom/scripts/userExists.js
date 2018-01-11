

// Username identique au
function connectionUser()
{
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	if(!doesThisUserExist(username)){
		dispStatusMsg("Cet email n'éxiste pas, créer un compte ?",'nok');
		return false;
	}
	if(!doesThisPasswordMatch(username, password))
	{
		dispStatusMsg("Le mot de passe est invalide",'nok');
		return false;
	}
	//tout est bon
	return true;
}



function doesThisPasswordMatch(username, password)
{
	let users = localStorage.getItem("users");
	if (users === null)
	{
		//si la BDD est vide l'utilisateur n'existe pas !
		return false;
	}

	let listUsers = JSON.parse(users);
	//pour chaque user, comaprer le nom
	for (let i = 0; i < listUsers.length; i++)
	{
		if (listUsers[i].name === username) //todo
		{
			//trouver le bon utilisateur
			if(listUsers[i].password === password)
			{
				// c'est donc le bon password
				return true;
			}
			//c'etait pas le bon password
			return false;
		}		
	}
	//si l'on a parcouru toute la liste et que l'on a rien trouvé
	return false;
}



/*fonction userExist pour la page user, appeler la fonctioncheckExistingUser dans "ceer_compte:*/
function doesThisUserExist(username)
{
	let users = localStorage.getItem("users");
	if (users == null)
	{
		//si la BDD est vide l'utilisateur n'existe pas !
		return false;
	}

	let listUsers = JSON.parse(users);
	//pour chaque user, comaprer le nom
	for (let i = 0; i < listUsers.length; i++)
	{
		if (listUsers[i].name === username) //todo
		{
			//indiquer un résultat positif dès le premier trouvé
			return true;
		}		
	}
	//si l'on a parcouru toute la liste et que l'on a rien trouvé
	return false;
}


//affiche un message pour l'utilisateur dans la fenêtre
function dispStatusMsg(message, css_class = 'ok')
{
	let ctnr = document.getElementById('statusMsg');
	ctnr.innerHTML = message;
	ctnr.className = 'info-' + css_class;
}