import {checkImageExistenceByIndex} from "../../apis/Images";

describe("mock and test api calls", () => {
  beforeEach(() => {
    fetch.resetMocks();
  })

  it("checkImageExistenceByIndex => mocking endpoint in fetch", async () => {
    const url = "http://content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/1/";

    fetch.mockResponseOnce(JSON.stringify({status: 200}));

    const res = await checkImageExistenceByIndex(url);

    expect(res).toEqual(true);
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(url);
  })
})
