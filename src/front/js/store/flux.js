const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			logged: null
		},
		actions: {
			verify: async () => {
				try {
					const resp = await fetch("https://3001-4geeksacade-reactflaskh-1n3r28z34jr.ws-eu44.gitpod.io/api/protected", {
						method: "GET",
						headers: { "Content-Type": "application/json", 'Authorization': 'Bearer ' + localStorage.getItem("token") },
					});
					const data = await resp.json();
					setStore({ logged: data.logged_in || false });
				} catch (e) {
					setStore({ logged: false });
				};
			},
			logout: async () => {
				localStorage.clear();
				setStore({ logged: false });
			}

		}
	};
};

export default getState;
