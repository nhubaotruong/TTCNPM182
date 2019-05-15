import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
const parentStyles = {
    overflow: 'hidden',
    position: 'relative'
}

const defaultStyles = {
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'block',
    float: 'left'
}

const getHalfStarStyles = (color, uniqueness) => {
    return `
    .react-stars-${uniqueness}:before {
      position: absolute;
      overflow: hidden;
      display: block;
      z-index: 1;
      top: 0; left: 0;
      width: 50%;
      content: attr(data-forhalf);
      color: ${color};
  }`
}

class ReactStars extends Component {

    constructor(props) {

        super(props)

        // set defaults

        props = Object.assign({}, props)

        this.state = {
            uniqueness: (Math.random() + '').replace('.', ''),
            value: props.value || 0,
            stars: [],
            halfStar: {
                at: Math.floor(props.value),
                hidden: props.half && props.value % 1 < 0.5
            },
            sta_1: 0,
            sta_2: 0,
            sta_3: 0,
            sta_4: 0,
            sta_5: 0,
            summary: 0,
            sum : 0
        }

        this.state.config = {
            count: props.count,
            size: props.size,
            char: props.char,
            // default color of inactive star
            color1: props.color1,
            // color of an active star
            color2: props.color2,
            half: props.half,
            edit: props.edit,
        }

    }

    componentDidMount() {
        axios
            .post('/xep_hang/2',{id:1})
            .then(res => {
                console.log('res is ', res.data);
                if(res.data!=="NULL"){
                    var x = res.data.star_1 + res.data.star_2 + res.data.star_3 + res.data.star_4 + res.data.star_5;
                    var y = res.data.star_1 + 2*res.data.star_2 + 3*res.data.star_3 + 4*res.data.star_4 + 5*res.data.star_5;
                    var z = y/x;
                    z = z.toFixed(2);
                    this.setState({ 
                        sta_1: res.data.star_1,
                        sta_2: res.data.star_2,
                        sta_3: res.data.star_3,
                        sta_4: res.data.star_4,
                        sta_5: res.data.star_5,
                        summary: z,
                        sum: x,
                        stars: this.getStars(this.state.value)
                     });
                }
                // console.log("hello");
            }
            )
            .catch(err => {
                console.log('error is ', err);
                alert("Có lỗi xảy ra!")
            })
    }
    UNSAFE_componentWillUpdate(props, nextState) {
        var z = nextState.sta_1 + 2*nextState.sta_2 + 3*nextState.sta_3 + 4*nextState.sta_4 + 5*nextState.sta_5;
        z = z / nextState.sum;
            z = z.toFixed(2);
        nextState.summary = z;
      }
    componentWillReceiveProps(props) {
        this.setState({
            stars: this.getStars(props.value),
            value: props.value,
            halfStar: {
                at: Math.floor(props.value),
                hidden: this.state.config.half && props.value % 1 < 0.5
            },
            config: Object.assign({}, this.state.config, {
                count: props.count,
                size: props.size,
                char: props.char,
                color1: props.color1,
                color2: props.color2,
                half: props.half,
                edit: props.edit
            })
        })
    }

    isDecimal(value) {
        return value % 1 !== 0
    }

    getRate() {
        let stars
        if (this.state.config.half) {
            stars = Math.floor(this.state.value)
        } else {
            stars = Math.round(this.state.value)
        }
        return stars
    }

    getStars(activeCount) {
        if (typeof activeCount === 'undefined') {
            activeCount = this.getRate()
        }
        let stars = []
        for (let i = 0; i < this.state.config.count; i++) {
            stars.push({
                active: i <= activeCount - 1
            })
        }
        return stars
    }

    mouseOver(event) {
        let { config, halfStar } = this.state
        if (!config.edit) return;
        let index = Number(event.target.getAttribute('data-index'))
        if (config.half) {
            const isAtHalf = this.moreThanHalf(event, config.size)
            halfStar.hidden = isAtHalf
            if (isAtHalf) index = index + 1
            halfStar.at = index
        } else {
            index = index + 1
        }
        this.setState({
            stars: this.getStars(index)
        })
    }

    moreThanHalf(event, size) {
        let { target } = event
        var mouseAt = event.clientX - target.getBoundingClientRect().left
        mouseAt = Math.round(Math.abs(mouseAt))
        return mouseAt > size / 2
    }

    mouseLeave() {
        const { value, halfStar, config } = this.state
        if (!config.edit) return
        if (config.half) {
            halfStar.hidden = !this.isDecimal(value)
            halfStar.at = Math.floor(this.state.value)
        }
        this.setState({
            stars: this.getStars()
        })
    }

    clicked(event) {
        const { config, halfStar } = this.state
        if (!config.edit) return
        let index = Number(event.target.getAttribute('data-index')) + 1
        if (window.confirm("Bạn đánh giá " + index + " sao!")) {
            index = index - 1
            let value
            if (config.half) {
                const isAtHalf = this.moreThanHalf(event, config.size)
                halfStar.hidden = isAtHalf
                if (isAtHalf) index = index + 1
                value = isAtHalf ? index : index + .5
                halfStar.at = index
            } else {
                value = index = index + 1
            }
            var sta1 = 0, sta2 = 0, sta3 = 0, sta4 = 0, sta5 = 0;
            switch (value) {
                case 1:
                    sta1 = 1
                    this.setState({sta_1:this.state.sta_1 + 1, sum: this.state.sum + 1})
                    break;
                case 2:
                    sta2 = 1
                    this.setState({sta_2:this.state.sta_2 + 1, sum: this.state.sum + 1})
                    break;
                case 3:
                    sta3 = 1
                    this.setState({sta_3:this.state.sta_3 + 1, sum: this.state.sum + 1})
                    break;
                case 4:
                    sta4 = 1
                    this.setState({sta_4:this.state.sta_4 + 1, sum: this.state.sum + 1})
                    break;
                case 5:
                    sta5 = 1
                    this.setState({sta_5:this.state.sta_5 + 1, sum: this.state.sum + 1})
                    break;
                default: break;
            }
            // console.log(this.state.sta_1)
            axios.post('/xep_hang/1', {
                id: 1, //mac dinh cho truyen so 1
                star_1: sta1,
                star_2: sta2,
                star_3: sta3,
                star_4: sta4,
                star_5: sta5
            })
                .then(res => {
                    console.log("Completed submit rating!")
                })
                .catch(err => {
                    console.log("Err :" + err)
                    alert("Đã xảy ra lỗi!")
                })
            this.setState({
                value: value,
                stars: this.getStars(index)
                // summary: z
            })
            this.props.onChange(value)
        }
    }

    renderHalfStarStyleElement() {
        const { config, uniqueness } = this.state
        return (
            <style dangerouslySetInnerHTML={{
                __html: getHalfStarStyles(config.color2, uniqueness)
            }}></style>
        )
    }

    renderStars() {
        const { halfStar, stars, uniqueness, config } = this.state
        const { color1, color2, size, char, half, edit } = config
        return (stars.map((star, i) => {
            let starClass = ''
            if (half && !halfStar.hidden && halfStar.at === i) {
                starClass = `react-stars-${uniqueness}`
            }
            const style = Object.assign({}, defaultStyles, {
                color: star.active ? color2 : color1,
                cursor: edit ? 'pointer' : 'default',
                fontSize: `${size}px`
            })
            return (
                <span
                    className={starClass}
                    style={style}
                    key={i}
                    data-index={i}
                    data-forhalf={char}
                    onMouseOver={this.mouseOver.bind(this)}
                    onMouseMove={this.mouseOver.bind(this)}
                    onMouseLeave={this.mouseLeave.bind(this)}
                    onClick={this.clicked.bind(this)}>
                    {char}
                </span>
            )
        })
        )
    }

    render() {

        const {
            className
        } = this.props

        return (
            <span className="badge badge-info">
                <div className={className} style={parentStyles}>
                    {this.state.config.half ?
                        this.renderHalfStarStyleElement() : ''}
                    {this.renderStars()}
                       {this.state.summary} ({this.state.sum} đánh giá!)
                </div>
            </span>
            // {this.state.summary} ({this.state.sum} đánh giá!)          
        )
    }

}

ReactStars.propTypes = {
    className: PropTypes.string,
    edit: PropTypes.bool,
    half: PropTypes.bool,
    value: PropTypes.number,
    count: PropTypes.number,
    char: PropTypes.string,
    size: PropTypes.number,
    color1: PropTypes.string,
    color2: PropTypes.string
}

ReactStars.defaultProps = {
    edit: true,
    half: false,
    value: 0,
    count: 5,
    char: '★',
    size: 30,
    color1: 'gray',
    color2: '#ffd700',

    onChange: newValue => {
        console.log(`Example 3: new value is ${newValue}`)
    }
};
export default ReactStars