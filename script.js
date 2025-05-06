function hideAll()
{
    document.getElementById("DNARNA").hidden = true
    document.getElementById("DEFAULT").hidden = true
    document.getElementById("TABLE").hidden = true
}


function TABLEMode()
{
    hideAll()
    document.getElementById("TABLE").hidden = false
}


function DNAMode()
{
    hideAll()
    document.getElementById("DNARNA").hidden = false
}



function drawAcid(inp, isRNA)
{
    let box = document.getElementById("drawing")
    let item
    let width
    let line
    let direction = "left"
    while (box.hasChildNodes()){ box.removeChild(box.firstChild) }

    for (let i = 0; i < inp.length; i++)
    {
        switch(i % 12)
        {
            case 0: width  = 240; direction = "left"; break;
            case 1: width  = 200; direction = "left"; break;
            case 2: width  = 100; direction = "left"; break;
            case 3: width  = 100; direction = "right"; break;
            case 4: width  = 200; direction = "right"; break;
            case 5: width  = 240; direction = "right"; break;
            case 6: width  = 240; direction = "right"; break;
            case 7: width  = 200; direction = "right"; break;
            case 8: width  = 100; direction = "right"; break;
            case 9: width  = 100; direction = "left"; break;
            case 10: width = 200; direction = "left"; break;
            case 11: width = 240; direction = "left"; break;
        }

        switch(inp[i])
        {
            case 'A': item = ["#e8524b", "A"]; break;
            case 'T': item = ["#ffcf4f", "T"]; break;
            case 'U': item = ["#f680e7", "U"]; break;
            case 'C': item = ["#6397f5", "C"]; break;
            case 'G': item = ["#58b374", "G"]; break;
        }

        if (isRNA == 1)
        {
            if (direction == "right")
            {
                line = document.createElement("center")
                line.innerHTML = "<div class=\"ball-line\" style=\"width: " + width + "px\"> <div class=\"ball\" style=\"background-color: #a592de; border-color: #a592de;\"> </div> <div class=\"connector\"></div> <div class=\"ball\" style=\"background-color: " + item[0] + ";\">" + item[1] + "</div> </div>"
                box.appendChild(line)
            }
            else
            {
                line = document.createElement("center")
                line.innerHTML = "<div class=\"ball-line\" style=\"width: " + width + "px;\"> <div class=\"ball\" style=\"background-color: " + item[0] + ";\">" + item[1] + "</div> <div class=\"connector\"></div> <div class=\"ball\" style=\"background-color: #a592de; border-color: #a592de\"> </div> </div>"
                box.appendChild(line)
            }
        }
        else
        {
            if (direction == "right")
            {
                line = document.createElement("center")
                line.innerHTML = "<div class=\"ball-line\" style=\"width: " + width + "px\"> <div class=\"ball\" style=\"background-color: white\"> </div> <div class=\"connector\"></div> <div class=\"ball\" style=\"background-color: " + item[0] + ";\">" + item[1] + "</div> </div>"
                box.appendChild(line)
            }
            else
            {
                line = document.createElement("center")
                line.innerHTML = "<div class=\"ball-line\" style=\"width: " + width + "px;\"> <div class=\"ball\" style=\"background-color: " + item[0] + ";\">" + item[1] + "</div> <div class=\"connector\"></div> <div class=\"ball\" style=\"background-color: white\"> </div> </div>"
                box.appendChild(line)
            }
        }
    }
}



function valid(reason)
{
    if (reason == 0)
    {
        document.getElementById("converter-output").textContent = "QUANTIDADE INVÁLIDA DE BASES"
    }
    else if (reason == 1)
    {
        document.getElementById("converter-output").textContent = "VALOR INCORRETO PARA BASES"
    }
    else if (reason == 2)
    {
        document.getElementById("converter-output").textContent = ""
    }
}



function checkValidity(text)
{
    text = text.replace(/\s/g,'')
    let size = text.length
    
    if (size % 3 != 0)
    {
        valid(0)
        return 0
    }
    else
    {
        text = text.toUpperCase()
        return text
    }
}



function convertToDNA()
{
    let textBox = document.getElementById("converter-input").value
    let check = checkValidity(textBox)
    let result = ''
    if (check != 0)
    {
        let size = check.length
        
        for (let i = 0; i < size; i++)
        {
            switch(check[i])
            {
                case 'U': result += 'A'; break;
                case 'A': result += 'T'; break;
                case 'C': result += 'G'; break;
                case 'G': result += 'C'; break;
                default: size = 0;
            }
        }
        if (size == 0)
        {
            valid(1)
        }
        else
        {
            document.getElementById("converter-input").value = result
            valid(2)
            drawAcid(result, 0)
        }
    }
}



function convertToRNA()
{
    let textBox = document.getElementById("converter-input").value
    let check = checkValidity(textBox)
    let result = ''
    if (check != 0)
    {
        let size = check.length
        
        for (let i = 0; i < size; i++)
        {
            switch(check[i])
            {
                case 'T': result += 'A'; break;
                case 'A': result += 'U'; break;
                case 'C': result += 'G'; break;
                case 'G': result += 'C'; break;
                default: size = 0;
            }
        }
        if (size == 0)
        {
            valid(1)
        }
        else
        {
            document.getElementById("converter-input").value = result
            valid(2)
            drawAcid(result, 1)
        }
    }
}



function convertToPROT()
{

}