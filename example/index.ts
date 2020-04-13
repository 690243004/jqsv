import Jqsv from "../src/index";

const app = document.getElementById("app");
const el = document.getElementById("el");

const JqsvConfig = {
  onLoad(token: number) {
    return Promise.resolve({
      code: 10000,
      data: {
        img_X: 260,
        img_Y: 160,
        normal:
          "data:image/jpg;base64,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",
        small:
          "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0LTtQvX8dy273lw0AuJQIzKxUAbsDGcV3QJx1rz7Sh/xcGc5B/wBIm6fVq789K3rWujCDdhST60ZPqab1pelZFC5PqaKbmigDKh8OWtvrT6mskvnM7PtLfLls5/ma1WpT1NIKG29wAUGiigQmKKWigAZhuP1pAeaKKYC0hoooAQGiiigD/9k=",
        array: [
          15,
          13,
          12,
          5,
          4,
          7,
          1,
          17,
          3,
          8,
          0,
          11,
          9,
          2,
          16,
          6,
          18,
          14,
          10,
          19
        ],
        location_Y: 35,
        validToken: "9c619f596a504ccbaf18e86fb2e09352"
      }
    });
  },
  onSubmit(
    vaildToken: string,
    requestToken: number,
    timespan: number,
    point: number,
    datelist: number[]
  ) {
    const error = {
      code: 10001,
      msg: "校验值与实际值出现误差",
      data: null
    };
    const sucess = {
      code: 10000,
      msg: "校验正确",
      data: "6087346787674a9e93cc83016b116487"
    };
    if (point > 83 && point < 100) {
      return Promise.resolve(sucess);
    } else {
      return Promise.resolve(error);
    }
  },
  onSuccess() {
    // instance.destory()
  },
  onFail() {}
};

let instance: any;
app!.addEventListener("click", async function() {
  if (instance) {
    if (instance.state === "loaded") {
      instance.show();
    } else {
      return;
    }
  } else {
    instance = await Jqsv(JqsvConfig, el!);
  }
});
