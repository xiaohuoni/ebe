import merge from 'lodash/merge';

interface SequenceIdOptions {

  /**
   * 创建id类型 random 随机   increment 自增
   */
  type?: 'random' | 'increment',

  /**
   * 随机数创建的长度
   */
  randomBit?: number;

  /**
   * 自增的起始位置
   */
  incrementStart?: number;

  /**
   * 排除的id
   */
  excludeId?: string[];
}

const randomArr = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'.split('');

const getRandomId = (randomBit = 6) => {
  let t = '';

  new Array(randomBit).fill(0).forEach(() => {
    t += randomArr[Math.floor(Math.random() * randomArr.length)];
  });
  return t;
};


class SequenceId {
  private idMap: (string | number)[] = [];

  private preId = 1;

  private options: SequenceIdOptions = {
    type: 'random',
    randomBit: 6,
    excludeId: [],
  };

  constructor(options: SequenceIdOptions) {
    this.options = merge(this.options, options);
    const { excludeId } = this.options;
    if (typeof this.options.incrementStart === 'number') {
      this.preId = this.options.incrementStart - 1;
    }
    if (Array.isArray(excludeId)) {
      this.idMap = excludeId;
    }
  }

  /**
   * 增加排除的id
   * @param excludeId
   */
  public addExcludeId(excludeId: string[]) {
    if (excludeId) {
      this.idMap.push(...excludeId);
    }
  }

  private createIncrementId() {
    const getId = (t = 0) => {
      let id = t + 1;
      if (this.idMap.map(Number).includes(id)) {
        id = getId(id);
      }
      return id;
    };
    const id = getId();
    this.preId = id;
    return id;
  }

  private createRandomId() {
    const getId = () => {
      let id = getRandomId(this.options.randomBit);
      if (this.idMap.includes(id)) {
        id = getId();
      }
      return id;
    };

    const id = getId();
    this.idMap.push(id);
    return id;
  }

  public getId() {
    if (this.options.type === 'random') {
      return this.createRandomId();
    }
    return this.createIncrementId();
  }
}

export default SequenceId;
