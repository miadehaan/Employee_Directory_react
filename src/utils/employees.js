const employeeData = 
    [
        {
            "gender":"male",
            "name":
                {
                    "title":"Mr",
                    "first":"Soham",
                    "last":"Fields"
                },
            "location":{
                "street":{
                    "number":5762,
                    "name":"Bruce St"
                },
                "city":"Shiloh","state":"Washington","country":"United States",
                "postcode":17404,
                "coordinates":{
                "latitude":"-24.6099",
                "longitude":"-63.5151"
                },
                "timezone":{
                    "offset":"-3:30",
                    "description":"Newfoundland"
                }
            },
            "email":"soham.fields@example.com","login":{"uuid":"e3491df1-cb75-4f59-be68-822a807779c4",
            "username":"happyleopard590",
            "password":"toto",
            "salt":"USBx7wKE",
            "md5":"fda4ea8c79290eb9cb3b8df4d2d49b4e",
            "sha1":"f3f325c9d9fe4f5bf554e61631a4d23cc69b9a37",
            "sha256":"4f94cf64fc1a817a1fcb9544c5c2b90cf07317ad93d23fef9a4f6381ac081912"},
            "dob":{
                "date":"1954-06-12T20:09:33.878Z",
                "age":66
            },
            "registered":{
                "date":"2005-03-13T18:50:51.593Z",
                "age":15
            },
            "phone":"(504)-446-7281",
            "cell":"(858)-358-9443",
            "id":{"name":"SSN","value":"531-11-4120"},
            "picture":{
                "large":"https://randomuser.me/api/portraits/men/64.jpg",
                "medium":"https://randomuser.me/api/portraits/med/men/64.jpg",
                "thumbnail":"https://randomuser.me/api/portraits/thumb/men/64.jpg"
            },
            "nat":"US"
        },
        {
            "gender":"male","name":{"title":"Mr","first":"Aiden","last":"Lawrence"},"location":{"street":{"number":8922,"name":"Miller Ave"},"city":"Addison","state":"Minnesota","country":"United States","postcode":81471,"coordinates":{"latitude":"54.7965","longitude":"-127.6690"},"timezone":{"offset":"-2:00","description":"Mid-Atlantic"}},"email":"aiden.lawrence@example.com","login":{"uuid":"d8d58df6-7595-4212-a341-d0085e807cad","username":"blackwolf386","password":"fishbone","salt":"N3u3kJcJ","md5":"80ce34b7b8821f462785a4ac84291e13","sha1":"ab29212e62d279f2ea4c90d1e22b6116cbf5102a","sha256":"823edd3527c262b0ec5bc323643c59777f067c722ffdf0edf1175cae4cbfcc35"},"dob":{"date":"1979-01-29T20:32:50.821Z","age":41},"registered":{"date":"2003-02-08T13:10:57.323Z","age":17},"phone":"(522)-558-5586","cell":"(435)-787-0134","id":{"name":"SSN","value":"179-22-5260"},"picture":{"large":"https://randomuser.me/api/portraits/men/86.jpg","medium":"https://randomuser.me/api/portraits/med/men/86.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/86.jpg"},"nat":"US"
        },
        { 
            "gender":"male","name":{"title":"Mr","first":"Tommy","last":"Sanchez"},"location":{"street":{"number":2997,"name":"Central St"},"city":"Allentown","state":"Maryland","country":"United States","postcode":22519,"coordinates":{"latitude":"-30.3827","longitude":"134.7362"},"timezone":{"offset":"-3:30","description":"Newfoundland"}},"email":"tommy.sanchez@example.com","login":{"uuid":"290952f5-a0d8-4448-9d88-d9658beb1356","username":"happyfrog393","password":"motorola","salt":"kDVROPVJ","md5":"2dad46f735844ed8db763a2dfc48e311","sha1":"1bc2692965f68fe7948931f296134151f57a451c","sha256":"99bf8ce714248805b0461262a564e2f20506395abfca373d969ff18c135d737d"},"dob":{"date":"1958-11-04T02:21:42.684Z","age":62},"registered":{"date":"2014-01-29T18:51:20.237Z","age":6},"phone":"(692)-365-7271","cell":"(786)-199-0190","id":{"name":"SSN","value":"213-68-4289"},"picture":{"large":"https://randomuser.me/api/portraits/men/3.jpg","medium":"https://randomuser.me/api/portraits/med/men/3.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/3.jpg"},"nat":"US"
        },
        {
            "gender":"female","name":{"title":"Mrs","first":"Rachel","last":"Prescott"},"location":{"street":{"number":845,"name":"Mockingbird Ln"},"city":"Addison","state":"Maryland","country":"United States","postcode":34549,"coordinates":{"latitude":"-64.8896","longitude":"87.5703"},"timezone":{"offset":"-3:30","description":"Newfoundland"}},"email":"rachel.prescott@example.com","login":{"uuid":"f3394a13-0ec5-4410-a227-cbaac996554a","username":"whitemouse193","password":"secure","salt":"ayacas6d","md5":"7f3c1f30860a034396e2d39326c12c6f","sha1":"33fdc54c55681ea32e7159305251ea715dcd66e3","sha256":"398a391157bf344f914d52507c0667b131a1f8a794d9d0c851beff94b8736443"},"dob":{"date":"1972-06-19T15:50:18.315Z","age":48},"registered":{"date":"2004-07-03T23:30:36.338Z","age":16},"phone":"(909)-318-5303","cell":"(828)-714-7115","id":{"name":"SSN","value":"612-00-6510"},"picture":{"large":"https://randomuser.me/api/portraits/women/58.jpg","medium":"https://randomuser.me/api/portraits/med/women/58.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/58.jpg"},"nat":"US"
        },
        {
            "gender":"female","name":{"title":"Ms","first":"Marjorie","last":"Miller"},"location":{"street":{"number":2921,"name":"Spring Hill Rd"},"city":"Daly City","state":"North Dakota","country":"United States","postcode":57799,"coordinates":{"latitude":"-83.7930","longitude":"42.4085"},"timezone":{"offset":"0:00","description":"Western Europe Time, London, Lisbon, Casablanca"}},"email":"marjorie.miller@example.com","login":{"uuid":"f3599b4b-1cda-42ef-92e1-324ad74ce8bc","username":"heavybutterfly135","password":"pictuers","salt":"lh7Avvw7","md5":"c4ba841b9884294a960ddb961512e1fb","sha1":"beed409c763597163f801cc0839612c2a48fc8b9","sha256":"e1896eb2536ff5332d07d5fcd2117eaec071ece5cbfda28c1c5d89681bd2f383"},"dob":{"date":"1949-02-19T11:08:55.134Z","age":71},"registered":{"date":"2009-10-07T00:06:32.670Z","age":11},"phone":"(746)-165-8082","cell":"(078)-341-8291","id":{"name":"SSN","value":"820-12-5777"},"picture":{"large":"https://randomuser.me/api/portraits/women/28.jpg","medium":"https://randomuser.me/api/portraits/med/women/28.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/28.jpg"},"nat":"US"
        },
        {
            "gender":"female","name":{"title":"Mrs","first":"Peggy","last":"Mills"},"location":{"street":{"number":5116,"name":"Mockingbird Ln"},"city":"Colorado Springs","state":"Tennessee","country":"United States","postcode":51285,"coordinates":{"latitude":"39.6430","longitude":"23.6294"},"timezone":{"offset":"-12:00","description":"Eniwetok, Kwajalein"}},"email":"peggy.mills@example.com","login":{"uuid":"41806406-0004-4e0c-aa18-29e1f51d8404","username":"orangefish638","password":"zaq123","salt":"75ehurhF","md5":"b94f776af4cf01b104a3b1c50eb3267c","sha1":"d4f30e7ebac0347bad86e71a7c53edab85d7a665","sha256":"d2f05c0f0da0b44d2711f0ca69fbd6a2e5d0b822c5ee4a514ac42917613344c8"},"dob":{"date":"1945-05-09T04:52:51.101Z","age":75},"registered":{"date":"2016-03-02T01:17:51.989Z","age":4},"phone":"(552)-940-8751","cell":"(433)-108-5391","id":{"name":"SSN","value":"343-27-9986"},"picture":{"large":"https://randomuser.me/api/portraits/women/68.jpg","medium":"https://randomuser.me/api/portraits/med/women/68.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/68.jpg"},"nat":"US"},
        {
            "gender":"female","name":{"title":"Miss","first":"Pauline","last":"Patterson"},"location":{"street":{"number":1228,"name":"Hunters Creek Dr"},"city":"Akron","state":"Texas","country":"United States","postcode":60013,"coordinates":{"latitude":"64.4086","longitude":"-81.1856"},"timezone":{"offset":"+3:30","description":"Tehran"}},"email":"pauline.patterson@example.com","login":{"uuid":"ec36c229-a241-40a9-919f-a9f74c3a821f","username":"yellowpanda550","password":"slowhand","salt":"OcuKrz77","md5":"3c309d96942fa01838349a7fba87c752","sha1":"dcb86c9c77652655a5961411495652c177f7ecee","sha256":"e2aa454e2e978bd75858b6e244ce124e480837f0364bff938127163d200c1da7"},"dob":{"date":"1961-05-25T09:58:11.193Z","age":59},"registered":{"date":"2007-03-20T19:29:18.385Z","age":13},"phone":"(045)-879-4100","cell":"(957)-860-3765","id":{"name":"SSN","value":"337-01-7809"},"picture":{"large":"https://randomuser.me/api/portraits/women/18.jpg","medium":"https://randomuser.me/api/portraits/med/women/18.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/18.jpg"},"nat":"US"
        },
        {   "gender":"female","name":{"title":"Miss","first":"Leslie","last":"Schmidt"},"location":{"street":{"number":9725,"name":"Miller Ave"},"city":"Concord","state":"South Dakota","country":"United States","postcode":62111,"coordinates":{"latitude":"-46.1241","longitude":"136.2613"},"timezone":{"offset":"-12:00","description":"Eniwetok, Kwajalein"}},"email":"leslie.schmidt@example.com","login":{"uuid":"9d20f83c-9da2-4b93-be33-92d4beb913c1","username":"brownlion226","password":"chichi","salt":"ZOlTLoQ7","md5":"37d37c1f02a911dc47ffd5d15734cd69","sha1":"64419a863c70d17b96622a2d7ffe4c3a7d7a0e50","sha256":"1933c162dfbe3b2e005fc1b837936090408d9897f939dc78369429e0ad40a1f9"},"dob":{"date":"1988-09-29T14:33:33.384Z","age":32},"registered":{"date":"2007-04-29T22:46:42.733Z","age":13},"phone":"(876)-027-0049","cell":"(228)-716-0684","id":{"name":"SSN","value":"596-67-7315"},"picture":{"large":"https://randomuser.me/api/portraits/women/69.jpg","medium":"https://randomuser.me/api/portraits/med/women/69.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/69.jpg"},"nat":"US"},
        {   "gender":"female","name":{"title":"Ms","first":"Dawn","last":"Graves"},"location":{"street":{"number":4486,"name":"Prospect Rd"},"city":"Fayetteville","state":"Minnesota","country":"United States","postcode":75862,"coordinates":{"latitude":"-85.1817","longitude":"-3.5629"},"timezone":{"offset":"-2:00","description":"Mid-Atlantic"}},"email":"dawn.graves@example.com","login":{"uuid":"f33dc1b1-ad79-4eaa-bb52-95f35b67a47b","username":"whitegoose616","password":"oliver","salt":"gsl2fGUL","md5":"98a459db01dd2dcb978580d27a68820d","sha1":"2076ce04086bd1d90f21ad9ef040b9585b3a1ac0","sha256":"7d0879e9781a45cb8c776525ff6afe5a1fb66b7669fe5b3a2a6474912f65d1ab"},"dob":{"date":"1972-11-03T10:40:00.474Z","age":48},"registered":{"date":"2016-12-25T23:41:25.196Z","age":4},"phone":"(372)-187-6059","cell":"(389)-492-5425","id":{"name":"SSN","value":"913-80-9246"},"picture":{"large":"https://randomuser.me/api/portraits/women/58.jpg","medium":"https://randomuser.me/api/portraits/med/women/58.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/58.jpg"},"nat":"US"},
        {   "gender":"male","name":{"title":"Mr","first":"Michael","last":"Henderson"},"location":{"street":{"number":7118,"name":"Camden Ave"},"city":"Fort Wayne","state":"Connecticut","country":"United States","postcode":34805,"coordinates":{"latitude":"-69.7748","longitude":"-70.1585"},"timezone":{"offset":"+3:30","description":"Tehran"}},"email":"michael.henderson@example.com","login":{"uuid":"2d18c9af-598d-494c-82dc-b08f6ef7e497","username":"heavyelephant541","password":"craving","salt":"IItND7cB","md5":"3338bb0ad1fde0282cef79679192e93e","sha1":"157e097436acb37c79bab1523248b72a2a154333","sha256":"fad55a252a9652eb935322564ab562f1523576482e7ff51165a6de2edd324d39"},"dob":{"date":"1964-07-27T10:04:50.869Z","age":56},"registered":{"date":"2018-08-13T19:04:29.094Z","age":2},"phone":"(734)-727-7495","cell":"(891)-660-8229","id":{"name":"SSN","value":"103-37-3039"},"picture":{"large":"https://randomuser.me/api/portraits/men/63.jpg","medium":"https://randomuser.me/api/portraits/med/men/63.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/63.jpg"},"nat":"US"},
        {   "gender":"female","name":{"title":"Mrs","first":"Laurie","last":"Kelly"},"location":{"street":{"number":6450,"name":"Spring St"},"city":"Rochester","state":"Georgia","country":"United States","postcode":24484,"coordinates":{"latitude":"-39.5716","longitude":"28.3929"},"timezone":{"offset":"+9:00","description":"Tokyo, Seoul, Osaka, Sapporo, Yakutsk"}},"email":"laurie.kelly@example.com","login":{"uuid":"f15d1e37-914b-469b-9524-884a7f074747","username":"organiczebra122","password":"francis","salt":"teFYxOWZ","md5":"5dd764947c0309bd74d3f6d60135f04d","sha1":"3b769911ea8365e57a467d439ab0c18f267dc174","sha256":"d0623f6757c8943a65dd79b56999d627cce7dc4109ec4b393846663352ea26bb"},"dob":{"date":"1984-04-26T22:43:45.263Z","age":36},"registered":{"date":"2010-12-02T16:41:32.554Z","age":10},"phone":"(798)-491-3342","cell":"(332)-998-1375","id":{"name":"SSN","value":"928-09-2283"},"picture":{"large":"https://randomuser.me/api/portraits/women/53.jpg","medium":"https://randomuser.me/api/portraits/med/women/53.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/53.jpg"},"nat":"US"}
    ]


export default employeeData;