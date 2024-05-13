const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			favorites2: [],
			characters: [],
			planets: [],
			ships: [],
			shipImages: [
				"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2e0f812-760e-426d-8792-fe53817ccbd3/dc7r0st-a74472ce-8092-401a-ba8c-9635e78cceba.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YyZTBmODEyLTc2MGUtNDI2ZC04NzkyLWZlNTM4MTdjY2JkM1wvZGM3cjBzdC1hNzQ0NzJjZS04MDkyLTQwMWEtYmE4Yy05NjM1ZTc4Y2NlYmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gWGLJ7914bUMqMtxru5pQr8oCWUhYhS3vdLrR1eCXP8",
				"https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C50%2C1600%2C800",
				"https://static.wikia.nocookie.net/starwars/images/5/5b/Imperial_Sentinel-class_shuttle.png",
				"https://cdn.wallpapersafari.com/70/91/clwqXy.png",
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtft0FVNe2cS0tumsPLeew190kje113lXPb30CFiZffqT2RNf4&usqp=CAc",
				"https://lumiere-a.akamaihd.net/v1/images/resistance-ywing-main_10b5e63d.jpeg?region=340%2C0%2C720%2C720",
				"https://lumiere-a.akamaihd.net/v1/images/X-Wing-Fighter_47c7c342.jpeg?region=0%2C96%2C1536%2C769",
				"https://cdnb.artstation.com/p/assets/images/images/028/086/799/large/donny-versiga-sw-tie-advanced-01.jpg?1593449609",
				"https://swrpggm.com/wp-content/uploads/2020/12/SSDFE.png",
				"https://external-preview.redd.it/A2lpCEKxYSNqsgaHHjz9TPYVWnAhrA1s64Ey6hCDmv8.jpg?auto=webp&s=1d0a97617b39c6adcbdf34d55c76fe600e1d6d12"
			],
			planetImages: [
				"https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png",
				"https://starwars-visualguide.com/assets/img/planets/2.jpg",
				"https://starwars-visualguide.com/assets/img/planets/3.jpg",
				"https://static.wikia.nocookie.net/starwars/images/8/81/Hoth_AoRCR.png/",
				"https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/6/68/Dagobah_2.jpg",
				"https://static.wikia.nocookie.net/starwars/images/2/2c/Bespin_EotECR.png",
				"https://static.wikia.nocookie.net/starwars/images/1/1d/Endor_BF2.png",
				"https://static.wikia.nocookie.net/starwars/images/f/f0/Naboo_planet.png",
				"https://static.wikia.nocookie.net/starwars/images/1/16/Coruscant-EotE.jpg",
				"https://static.wikia.nocookie.net/starwars/images/a/a9/Eaw_Kamino.jpg"
			]
		},
		actions: {

			capitalize: (string) => {
				return string[0].toUpperCase() + string.slice(1);
			},

			addFav2: (name, type, id) => {
				let favoritesList = getStore().favorites2;
				favoritesList.push(name);
				setStore({ favorites2: favoritesList })
			},


			addFav: (newFav) => {
				let favoritesList = getStore().favorites;
				let linkList = []
				favoritesList.push(newFav);

				setStore({ favorites: favoritesList });
			},

			deleteFav: (name) => {
				let newFavList = getStore().favorites.filter((item) => item.name != name)

				setStore({ favorites: newFavList });
			},


			fetchPeople: async () => {
				let res =
					await fetch('https://swapi.dev/api/people/')
						.then(response => {
							if (response.ok) {
								return response.json();
							}
							else {
								throw Error(response.statusText);
							}
						}).catch(error => {
							throw Error(error);
						})
				setStore({ characters: res.results });
			},
			fetchPlanets: async () => {
				let res =
					await fetch('https://swapi.dev/api/planets/')
						.then(response => {
							if (response.ok) {
								return response.json();
							}
							else {
								throw Error(response.statusText);
							}
						}).catch(error => {
							throw Error(error);
						})
				setStore({ planets: res.results });
			},
			fetchShips: async () => {
				let res =
					await fetch('https://swapi.dev/api/starships/')
						.then(response => {
							if (response.ok) {
								return response.json();
							}
							else {
								throw Error(response.statusText);
							}
						}).catch(error => {
							throw Error(error);
						})
				setStore({ ships: res.results });
			}
		}
	};
};

export default getState;
