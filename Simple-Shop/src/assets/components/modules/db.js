export function insertOrder(payload){
    
    const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2amx6b3J5ZGN0aGZ5bWZvb2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MDQsImV4cCI6MTk4MjE3NDcwNH0.cX9zyqXQySDF_AGlZcYstZJJ2IiN6neRgv_98dLPCjw"
    const url = "https://gvjlzorydcthfymfoodj.supabase.co";
    fetch(url + "/rest/v1/simple-shop", {
        method: 'POST',
        headers: {
            apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2amx6b3J5ZGN0aGZ5bWZvb2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MDQsImV4cCI6MTk4MjE3NDcwNH0.cX9zyqXQySDF_AGlZcYstZJJ2IiN6neRgv_98dLPCjw',
            Authorization: 'Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2amx6b3J5ZGN0aGZ5bWZvb2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MDQsImV4cCI6MTk4MjE3NDcwNH0.cX9zyqXQySDF_AGlZcYstZJJ2IiN6neRgv_98dLPCjw',
            'Content-Type': 'application/json',
            Prefer: "return=representation",
        },
        body: JSON.stringify(payload),
    })
    .then()
    .then();
}
/* 
'https://gvjlzorydcthfymfoodj.supabase.co/rest/v1/simple-shop' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY" \
-H "Content-Type: application/json" \
-H "Prefer: return=representation" \
-d '{ "some_column": "someValue", "other_column": "otherValue" }'
*/


/* 
const options = {
  method: 'POST',
  headers: {
    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2amx6b3J5ZGN0aGZ5bWZvb2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MDQsImV4cCI6MTk4MjE3NDcwNH0.cX9zyqXQySDF_AGlZcYstZJJ2IiN6neRgv_98dLPCjw',
    Authorization: 'Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2amx6b3J5ZGN0aGZ5bWZvb2RqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjU5ODcwNCwiZXhwIjoxOTgyMTc0NzA0fQ.uaQ2WR7QdjG2c8KbUcOOtd8IzPruYyy6iReusOFDtZ4',
    'Content-Type': 'application/json'
  },
  body: '{"genres":["Horror","Comedy"],"name":"The Simpsons","seasons":69,"rating":5,"ongoing":false,"director":"Matt Groening"}'
};

fetch('https://gvjlzorydcthfymfoodj.supabase.co/rest/v1/TV_Shows?select=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
*/