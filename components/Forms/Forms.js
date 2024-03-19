import { styles } from '../../constants/styles'
import { View, Picker, Pressable, Text } from 'react-native'
import ResultPage from '../ResultPage/ResultPage'
import { useState, useEffect } from 'react'

export default function Forms() {
  const services = ['-selecione um serviço-', 'Netflix', 'Max', 'HBOMax', 'Amazon Prime Video', 'Disney Plus', 'Mubi', 'Oldflix', 'Filmicca', 'Paramount Plus Apple TV Channel ', 'Paramount Plus']
  const genres = [
    {
      id: 0,
      name: '-selecione um gênero-'
    },
    {
      id: 28,
      name: "Ação"
    },
    {
      id: 12,
      name: "Aventura"
    },
    {
      id: 16,
      name: "Animação"
    },
    {
      id: 35,
      name: "Comédia"
    },
    {
      id: 80,
      name: "Crime"
    },
    {
      id: 99,
      name: "Documentário"
    },
    {
      id: 18,
      name: "Drama"
    },
    {
      id: 10751,
      name: "Família"
    },
    {
      id: 14,
      name: "Fantasia"
    },
    {
      id: 36,
      name: "História"
    },
    {
      id: 27,
      name: "Terror"
    },
    {
      id: 10402,
      name: "Música"
    },
    {
      id: 9648,
      name: "Mistério"
    },
    {
      id: 10749,
      name: "Romance"
    },
    {
      id: 878,
      name: "Ficção científica"
    },
    {
      id: 10770,
      name: "Cinema TV"
    },
    {
      id: 53,
      name: "Thriller"
    },
    {
      id: 10752,
      name: "Guerra"
    },
    {
      id: 37,
      name: "Faroeste"
    }
  ]
  const [service, setService] = useState(null)
  const [genre, setGenre] = useState(null)
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [movie, setMovie] = useState(null)
  const [movieList, setMovieList] = useState(null)
  const [availableServices, setAvailableServices] = useState(null)


  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzM0ZWM4NWQwMzBjMjQ2Y2QyNjk2YTZhYWE2ZWY3MiIsInN1YiI6IjY0ZWEyM2ZiNTI1OGFlMDEyY2E1OGI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lVjCpO9T1KCBhNyVbLVIj46vBep4N59cuI3pXov4T9E",
    },
  }

  function randomMovieFromList() {
    return Math.floor(Math.random() * 20)
  }

  function randomPage() {
    return Math.floor(Math.random() * 500)
  }

  function openResultPage() {
    setModalIsVisible(true)
  }

  function closeResultPage() {
    setModalIsVisible(false)
  }


  const moviesByGenre = () => {
    //list of movies by genre

    console.log("genre: " + genre)
    const randomPageNumber = randomPage()
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${randomPageNumber}&sort_by=popularity.desc&with_genres=${genre}`, options)
      .then(response => response.json())
      .then(response => {
        setMovieList(response)
        checkProviders()
      })
      .catch(err => console.error(err));

  }

  const checkProviders = () => {

    if (!movieList) return;
    //checks providers for the movie
    console.log(movieList.page)
    movieList.page = randomPage()
    const randomId = randomMovieFromList()

    fetch(`https://api.themoviedb.org/3/movie/${movieList.results[randomId].id}/watch/providers`, options)
      .then(response => response.json())
      .then(response => {
        console.log('check providers')
        console.log(response)
        if (response.results.BR) {
          console.log('testando')
          let add = response.results.BR.add ? response.results.BR.add.map(provider => provider.provider_name) : false
          let buy = response.results.BR.buy ? response.results.BR.buy.map(provider => provider.provider_name) : false
          let flatrate = response.results.BR.flatrate ? response.results.BR.flatrate.map(provider => provider.provider_name) : false
          let rent = response.results.BR.rent ? response.results.BR.rent.map(provider => provider.provider_name) : false

          let arrServices = [].concat(add, buy, flatrate, rent)
          console.log(arrServices)


          console.log("service: " + service)

          if (arrServices.includes(service)) {
            console.log('include')
            setAvailableServices(arrServices)
            movieDetails(movieList.results[randomId].id)
          } else {
            moviesByGenre()
          }
        } else {
          moviesByGenre()
        }
      })
      .catch(err => console.error(err));

  }

  const movieDetails = (movieId) => {
    // movie details
    console.log(movieId);
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log('movie Details');
        console.log(response)
        setMovie(response)
        openResultPage()
      })
      .catch((err) => console.error(err));
  };




  return (
    <View style={styles.formsContainer}>

      <View>
        <Text style={styles.pickerTitle}>Serviço</Text>
        <Picker
          style={styles.pickerMenuContainer}
          itemStyle={{ height: 64 }}

          onValueChange={(itemValue, itemIndex) => {
            setService(itemValue)
          }}>

          {services.map((item, itemIndex) => (
            <Picker.Item key={itemIndex} label={item} value={item} />
          ))}

        </Picker>
      </View>

      <View>
        <Text style={styles.pickerTitle}>Gênero</Text>
        <Picker
          style={styles.pickerMenuContainer}
          itemStyle={{ height: 64 }}

          onValueChange={(itemValue, itemIndex) => {
            console.log(itemValue)
            setGenre(itemValue)
          }}>

          {genres.map((item, itemIndex) => (
            <Picker.Item key={itemIndex} label={item.name} value={item.id} />
          ))}

        </Picker>
      </View>

      <Pressable
        style={styles.findButton}
        onPress={() => {
          moviesByGenre()
        }}
      >
        <Text style={styles.findButtonText}>
          Buscar
        </Text>
      </Pressable>

      {modalIsVisible && movie && <ResultPage
        visible={modalIsVisible}
        close={closeResultPage}
        movie={movie}
        availableServices={availableServices} />}


    </View>
  )
}

