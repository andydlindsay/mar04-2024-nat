# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [x] Method Override [Stretch]


### Hashing
* one way process => cannot be undone
* plaintext password => hashing algo => "fjhsddofboasdfai9sdfansldfkahsdifhasdf"
* 'secret' + 'fahsdkfhasdkhfa' => hash => "asdfhajshdfhasdf"

### Encryption
* two-way process => can be undone
* plaintext cookie => middleware encrypt => 'dafkasdjfahdskhfa'
* 'dafkasdjfahdskhfa' => middleware decrypted => 'userId: 2'

```js
// reading cookies
req.cookies.userId;
req.session.userId;

// setting cookie
res.cookie('userId', 'abc');
req.session.userId = 'abc';

// clearing cookie
res.clearCookie('userId');
req.session.userId = null;
req.session = null; // clears all cookies
```



https://localhost:7000/protected

Monster in the Middle (MitM)


### HTTPS HTTP Secure
* encrypts all traffic
* asymetric encryption => public key, private key

https://www.google.com/


### REST
* RESTful
* naming convention for routes
* resources are always plural
* actions are always singular

POST /login

GET /all-the-urls
POST /a-new-url-is-created

Browse  GET   /maps
Read    GET   /maps/:id
Edit    POST  /maps/:id
Add     POST  /maps
Delete  POST  /maps/:id/delete

Browse  GET     /maps
Read    GET     /maps/:id
Edit    PATCH   /maps/:id
Edit    PUT     /maps/:id
Add     POST    /maps
Delete  DELETE  /maps/:id

### More HTTP Methods/Verbs
* PUT => modifies an existing resource (completely replaces the resource)
* PATCH => modifies an existing resource (replaces a piece of a resource)
* DELETE => deletes a resource

app.patch()
app.put()
app.delete()


req.method = req.query._method
req.url

app.patch()







