export const constructTwitterShareURL = (text, url) =>
`https://twitter.com/intent/tweet\
?text=${text}%0a\
&url=${url}\
&hashtags=${'FridaysForFuture,気候も危機,ClimateStrike'}\
&via=FridaysJapan`;
