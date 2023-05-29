# Sneakerhead App

## Data layer

### Data

- Collection of sneakers

- Sneaker:

  - id: string
  - name: string
  - brand: string
  - image: string
  - price: number
  - colors: string[]
  - features: {
    description[],
    isAvailable: boolean
    }
  - user: string

- User State
- UI State

## Actions

- getSneakers()
  -> user id
- addSneaker()
- updateSneaker()
- removeSneaker()
- filterSneaker()
  -> brand

- loginUser()
- logoutUser()

- showModal()
- hideModal()
- showLoader()
- hideLoader()

## Custom hooks

- useSneakers
  -> getSneakers()
  -> getSneakerById()
  -> addSneaker()
  -> updateSneaker()
  -> removeSneaker()
- useUser
  –> loginUser()
- useToken
  -> getDataToken()
- useLocalStorage()
  -> setToken()
  -> getToken()
  -> removeToken()

## Components

### Header

- Shows the logo

### NavBar

- Shows navLink add
- Shows navLink home
- Shows button logOut
- Create logoutActionOnClick:
  - Call logoutUser() from useUser -> custom hook
  - removeToken() from useToken -> custom hook
- Send the logoutActionOnClick to LogoutButton

### LoginPage

- Renders LoginForm component
- Recieves a dispatch
- Creates the function handleOnSubmit -> receives userCredentials
  - Calls loginUser -> receives userCredentials from useUser() (custom hook)
  - Decode data token with getDataToken() from useToken() (custom hook)
  - Dispatch loginUserCreator with decoded data
  - Calls setToken() from useLocalstorage()
  - Navigates to ListPage

### LoginForm

- Has its own state -> useState
- Receives a handleOnSubmit function
- Create a functionOnHandleOnSubmit
  - Calls preventDefault()
  - Calls handleOnSubmit(userCredentials)
  - Reset UserCredentials
- Shows controls forms (label & input) for username and password
- Show a button with the text "Send"

### AddFormPage

- Renders a Form component
- Receives a dispatch
- Create a handleOnSubmit(receives a new sneaker from form state)
- Calls addSneaker(receives the new sneaker) from useSneakers custom hook
- Dispatchs addSneakerActionCreator
- Navigates to ListPage

### UpdateFormPage

- Renders a Form component
- Receives a sneaker data from props
- Receives a dispatch
- Create a handleOnSubmit(receives an updated sneaker from form state)
  - Calls updateSneaker(receives the new sneaker) from useSneakers custom hook
  - Dispatchs updateSneakerActionCreator
  - Navigates to ListPage

### Form

- Has its own state -> useState
- Recieves from props:
  - The text for the button
  - Optional sneaker data
  - ActionOnSubmit
- If receives a Sneaker item from props, set own state properties from Sneaker prop
- Shows control forms (label & input) of:
  - Name
  - Brand
  - Image url
  - Price
  - Colors
  - Features
    - Description
    - isAvailable
- Shows button component

### SneakersListPage // HomePage

- Recevies a dispatch
- Call getSneakers() from useSneakers custom hook
- Dispatchs loadSneakersActionCreator
- Receives a collection of Sneakers from store with useAppSelector
- Renders SneakersList

### SneakersList

- Receives a collection of sneakers from props
- Renders as many SneakerCard as many are in the collection recived
- Creates removeActionOnClick(receives an id) function
  - Calls removeSneaker(receives an id) from useSneakers custom hook and removeSneakerActionCreator(id)
- Create a detailsActionOnSubmit(id) wich navigates to DetailsPage

### SneakerCard

- Receives a Sneaker data from props
- Receives a removeActionOnSubmit to delete
- Receives a detailsActionOnSubmit(id)
- Shows:
  - Image
  - Name
  - Brand
- Shows the delete button

### SneakerDetailPage

- Call getSneakerById() from useSneakercustom hook
- Create editActionOnClick() who navigates to UpdateFormPage(sneaker)
- Shows all the Sneaker data :
  - Name
  - Brand
  - Image url
  - Price
  - Colors
  - Features
    - Description
    - isAvailable
- Shows the update button
- Shows the delete button

### Button

- Receives a text / icon
- Receives an action on click
- Shows a button with the received text / icon
- Calls the received action when the button is clicked

### Pagination

- Loads the following sneakers
