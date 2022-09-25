# Nice to haves with more time

-   I had experimented with using Web Speech API to read out pokemon - but it was hard to find a good match
-   Animation - including flip open or loading states. Created loading state in redux, but did not use
-   accessibility is really important to me, but was something I neglicted for this assignment. Normally I would make sure we had proper labels and tabbing flow.
-   Better type definition and restructuring of components to handle internal state
-   Unit tests in components. Right now all tests are within the reducers were most of my logic lies
-   History just adds most recent searched to the top of the list. Would like to look into removing duplicates and instead pushing to the top
-   Flavor text is used, but I default to the first returned. I realized later that the first entry is not always in english. would like to filter list to find first reponse with english lang set
-   Currently place all of the response into Redux. Would like to pick out what I need to return payload and make the store easier to read.

# Highlighted Features

-   Redux store is structured to store existing entries. This allows for retirieving an existing response instead of making a request each time.
-   Styles inspired by pokedex images - with a flatter feel
