export async function get({ params }) {
  const posts = [
    { id: 1, title: "love", body: "lote dasdsa dm  fdsf hjifhdshfds hfuds f" },
    {
      id: 2,
      title: "love2",
      body: "lotem  fdsf hjifhdshfds hfuds dsa dsa ds af",
    },
    {
      id: 3,
      title: "love3",
      body: "lote dsadasdm  asd as dasfdsf hjifhdshfds hfuds d sadaf",
    },
    {
      id: 4,
      title: "love4",
      body: "lotem  fdsf hj dasdas dasdifhdshfds hfudsd as dasdsa dsa f",
    },
    {
      id: 5,
      title: "love5",
      body: "loteas dsa dsa dm  fdsf hjifhdshfad sadsadds hfudsd das dasd ad sa das da f",
    },
  ];

  const post = posts.find((g) => g.id == params.id);

  if (post) {
    return {
      status: 200,
      body: { post },
    };
  }

  return {
    status: 404,
  };
}
